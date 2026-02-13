import db from '../database/models/index.js';

const getAutorizacionById = async (req, res) => {
    try {
        const id = req.params.id;
        const autorizacion = await db.Autorizacion.findByPk(id);
        if (!autorizacion) {
            return res
                .status(404)
                .json({ message: 'No se encontro la autorizacion' });
        }
        return res.status(200).json(autorizacion);
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

const getAutorizacionesByPrestador = async (req, res) => {
    try {
        const prestadorId = req.params.prestadorId;
        const prestador = await db.Prestador.findByPk(prestadorId);
        if (!prestador) {
            return res
                .status(404)
                .json({ message: 'No se encontro el prestador' });
        }
        const autorizaciones = await db.Autorizacion.findAll({
            where: { PrestadorId: prestadorId },
        });
        if (autorizaciones.length === 0) {
            return res.status(404).json({
                message: 'No se encontraron autorizaciones de este prestador',
            });
        }
        return res.status(200).json(autorizaciones);
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

const getAutorizacionesByPrestadorAndEstado = async (req, res) => {
    try {
        const prestadorId = req.params.prestadorId;
        const estados = req.params.estados.split(',');

        const pagina = parseInt(req.query.pagina);
        const tamaño = parseInt(req.query.tamaño);

        const prestador = await db.Prestador.findByPk(prestadorId);
        if (!prestador) {
            return res
                .status(404)
                .json({ message: 'No se encontro el prestador' });
        }

        const options = {
            where: {
                [db.Sequelize.Op.or]: [
                    { PrestadorId: prestadorId },
                    { PrestadorId: null },
                ],
                estado: { [db.Sequelize.Op.in]: estados },
            },
            limit: tamaño,
            offset: (pagina - 1) * tamaño,
        };

        const busqueda = req.query.busqueda;
        if (busqueda && busqueda.trim() !== '') {
            options.where[db.Sequelize.Op.and] = [
                {
                    [db.Sequelize.Op.or]: [
                        db.Sequelize.where(
                            db.Sequelize.col('Afiliado.nombre'),
                            {
                                [db.Sequelize.Op.like]: `%${busqueda}%`,
                            }
                        ),
                        db.Sequelize.where(
                            db.Sequelize.col('Afiliado.apellido'),
                            {
                                [db.Sequelize.Op.like]: `%${busqueda}%`,
                            }
                        ),
                        { asunto: { [db.Sequelize.Op.like]: `%${busqueda}%` } },
                    ],
                },
            ];
        }

        const { rows, count } = await db.Autorizacion.findAndCountAll(options);
        const autorizaciones = rows;
        if (autorizaciones.length === 0) {
            return res.status(404).json({
                message:
                    'No se encontraron autorizaciones de este prestador con el estado indicado',
            });
        }
        return res.status(200).json({ autorizaciones, count });
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

const updateAutorizacion = async (req, res) => {
    try {
        const id = req.params.id;
        const autorizacion = await db.Autorizacion.findByPk(id);
        if (!autorizacion) {
            return res
                .status(404)
                .json({ message: 'No se encontro la autorizacion' });
        }
        const { estado, motivoEstado, PrestadorId } = req.body;
        autorizacion.estado = estado;
        autorizacion.motivoEstado = motivoEstado;
        autorizacion.PrestadorId = PrestadorId;
        await autorizacion.save();
        return res.status(200).json(autorizacion);
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

const createAutorizacion = async (req, res) => {
    try {
        const autorizacion = db.Autorizacion.create({ ...req.body });
        if (autorizacion === db.Sequelize.ValidationError) {
            return res.status(400).json(autorizacion);
        }
        return res.status(201).json(autorizacion);
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

export default {
    getAutorizacionById,
    getAutorizacionesByPrestador,
    getAutorizacionesByPrestadorAndEstado,
    updateAutorizacion,
    createAutorizacion,
};
