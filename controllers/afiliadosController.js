import db from '../database/models/index.js';

const getAfiliadoById = async (req, res) => {
    try {
        const id = req.params.id;
        const afiliado = await db.Afiliado.findByPk(id);
        if (!afiliado) {
            return res
                .status(404)
                .json({ message: 'No se encontro el afiliado' });
        }
        return res.status(200).json(afiliado);
    } catch (error) {
        return res
            .status(500)
            .json({
                message: 'Error interno del servidor',
                error: error.message,
            });
    }
};

const createAfiliado = async (req, res) => {
    try {
        const afiliado = await db.Afiliado.create({ ...req.body });
        if (afiliado === db.Sequelize.ValidationError) {
            return res.status(400).json(afiliado);
        }
        return res.status(201).json({ afiliado });
    } catch (error) {
        return res
            .status(500)
            .json({
                message: 'Error interno del servidor',
                error: error.message,
            });
    }
};

//Horrible
const updateAfiliado = async (req, res) => {
    try {
        const id = req.params.id;
        const afiliado = await db.Afiliado.findByPk(id);
        if (!afiliado) {
            return res
                .status(404)
                .json({ message: 'No se encontro el afiliado' });
        }
        const {
            numeroGrupoFamiliar,
            numeroIntegrate,
            nombre,
            apellido,
            parentesco,
        } = req.body;
        if (numeroGrupoFamiliar) {
            afiliado.numeroGrupoFamiliar = numeroGrupoFamiliar;
        }
        if (numeroIntegrate) {
            afiliado.numeroIntegrate = numeroIntegrate;
        }
        if (nombre) {
            afiliado.nombre = nombre;
        }
        if (apellido) {
            afiliado.apellido = apellido;
        }
        if (parentesco) {
            afiliado.parentesco = parentesco;
        }
        await afiliado.save();
        res.status(200).json(afiliado);
    } catch (error) {
        return res
            .status(500)
            .json({
                message: 'Error interno del servidor',
                error: error.message,
            });
    }
};

const deleteAfiliado = async (req, res) => {
    try {
        const id = req.params.id;
        const afiliado = await db.Afiliado.findByPk(id);
        if (!afiliado) {
            return res
                .status(404)
                .json({ message: 'No se encontro el afiliado' });
        }
        await afiliado.destroy();
        return res
            .status(200)
            .json({ message: 'Afiliado borrado exitosamente' });
    } catch (error) {
        return res
            .status(500)
            .json({
                message: 'Error interno del servidor',
                error: error.message,
            });
    }
};

const getGrupoFamiliar = async (req, res) => {
    try {
        const nroGrupoFamiliar = req.params.nroGrupoFamiliar;
        const afiliados = await db.Afiliado.findAll({
            where: {
                numeroGrupoFamiliar: nroGrupoFamiliar,
            },
        });
        if (!afiliados) {
            return res
                .status(404)
                .json({
                    message: 'No se encontraron afiliados del grupo familiar',
                });
        }
        return res.status(200).json(afiliados);
    } catch (error) {
        return res
            .status(500)
            .json({
                message: 'Error interno del servidor',
                error: error.message,
            });
    }
};

export default {
    getAfiliadoById,
    createAfiliado,
    updateAfiliado,
    deleteAfiliado,
    getGrupoFamiliar,
};
