import db from '../database/models/index.js';
import { hash, compare } from 'bcrypt';

const validatePassword = async (req, res) => {
    try {
        const contraseñaEnviada = req.body.contraseña;
        const nombre = req.body.nombre;

        let usuario = await db.Prestador.unscoped().findOne({
            where: { nombre: nombre },
            attributes: ['contraseña'],
        });

        if (!usuario) {
            return res
                .status(404)
                .json({ message: 'No se encontro el prestador indicado' });
        }

        const esValida = await compare(contraseñaEnviada, usuario.contraseña);
        if (!esValida) {
            return res.status(401).json({ message: 'Contraseña Incorrecta' });
        }

        usuario = await db.Prestador.findOne({ where: { nombre: nombre } });

        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

const getMedicosDeCentro = async (req, res) => {
    try {
        const centroId = req.params.centroId;
        const centro = await db.Prestador.findByPk(centroId);
        if (!centro) {
            return res
                .status(404)
                .json({ message: 'No se encontro el prestador indicado' });
        }
        if (!centro.esCentro) {
            return res
                .status(400)
                .json({ message: 'El prestador indicado no es centro medico' });
        }
        const medicos = await db.Prestador.findAll({
            where: { centroId: centroId },
            attributes: ['id', 'nombre'],
        });
        return res.status(200).json(medicos);
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

const registrarUsuario = async (req, res) => {
    try {
        const { nombre, contraseña } = req.body;
        let usuario = await db.Prestador.findOne({ where: { nombre: nombre } });
        if (usuario) {
            return res.status(400).json({ message: 'Ya existe ese usuario' });
        }
        const contraseñaHasheada = await hash(contraseña, 10);
        usuario = await db.Prestador.create({
            ...req.body,
            contraseña: contraseñaHasheada,
        });
        return res.status(201).json(usuario);
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

export default {
    validatePassword,
    registrarUsuario,
    getMedicosDeCentro,
};
