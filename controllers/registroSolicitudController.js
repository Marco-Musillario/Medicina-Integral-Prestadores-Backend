import db from '../database/models/index.js';

const getRegistrosByPrestadorAndDate = async (req, res) => {
    try {
        const prestadorId = req.params.prestadorId;
        const prestador = await db.Prestador.findByPk(prestadorId);
        if (!prestador) {
            return res
                .status(404)
                .json({ message: 'No se encontro el prestador' });
        }
        const minFecha = new Date(req.query.minFecha);
        const maxFecha = new Date(req.query.maxFecha);
        maxFecha.setDate(maxFecha.getDate() + 1);
        const registros = await db.RegistroSolicitud.findAll({
            where: {
                [db.Sequelize.Op.or]: [
                    { PrestadorId: prestadorId },
                    { PrestadorId: null },
                ],
                fecha: {
                    [db.Sequelize.Op.gte]: minFecha,
                    [db.Sequelize.Op.lt]: maxFecha,
                },
            },
        });
        if (registros.length === 0) {
            return res.status(404).json({
                message: 'No se encontraron registros de este prestador',
            });
        }
        return res.status(200).json(registros);
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

const createRegistro = async (req, res) => {
    try {
        const registro = await db.RegistroSolicitud.create({ ...req.body });
        return res.status(201).json(registro);
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

export default {
    getRegistrosByPrestadorAndDate,
    createRegistro,
};
