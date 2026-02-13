import db from '../database/models/index.js';

const getReintegroById = async (req, res) => {
    try {
        const id = req.params.id;
        const reintegro = await db.Reintegro.findByPk(id);
        if (!reintegro) {
            return res
                .status(404)
                .json({ message: 'No se encontro el reintegro' });
        }
        return res.status(200).json(reintegro);
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

const getReintegrosByPrestador = async (req, res) => {
    try {
        const prestadorId = req.params.prestadorId;
        const prestador = await db.Prestador.findByPk(prestadorId);
        if (!prestador) {
            return res
                .status(404)
                .json({ message: 'No se encontro el prestador' });
        }
        const reintegros = await db.Reintegro.findAll({
            where: { PrestadorId: prestadorId },
        });
        if (reintegros.length === 0) {
            return res.status(404).json({
                message: 'No se encontraron reintegros de este prestador',
            });
        }
        return res.status(200).json(reintegros);
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

const getReintegrosByPrestadorAndEstado = async (req, res) => {
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

        const { rows, count } = await db.Reintegro.findAndCountAll(options);

        const reintegros = rows;
        if (reintegros.length === 0) {
            return res.status(404).json({
                message:
                    'No se encontraron reintegros de este prestador con el estado indicado',
            });
        }

        return res.status(200).json({ reintegros, count });
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

const updateReintegro = async (req, res) => {
    try {
        const id = req.params.id;
        const reintegro = await db.Reintegro.findByPk(id);
        if (!reintegro) {
            return res
                .status(404)
                .json({ message: 'No se encontro el reintegro' });
        }
        const { estado, motivoEstado, PrestadorId } = req.body;
        reintegro.estado = estado;
        reintegro.motivoEstado = motivoEstado;
        reintegro.PrestadorId = PrestadorId;
        await reintegro.save();
        return res.status(200).json(reintegro);
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

const createReintegro = async (req, res) => {
    try {
        const reintegro = await db.Reintegro.create({ ...req.body });
        if (reintegro === db.Sequelize.ValidationError) {
            return res.status(400).json(reintegro);
        }
        return res.status(201).json(reintegro);
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

export default {
    getReintegroById,
    getReintegrosByPrestador,
    getReintegrosByPrestadorAndEstado,
    updateReintegro,
    createReintegro,
};
