import db from '../database/models/index.js';

const getRecetaById = async (req, res) => {
    try {
        const id = req.params.id;
        const receta = await db.Receta.findByPk(id);
        if (!receta) {
            return res
                .status(404)
                .json({ message: 'No se encontro la receta' });
        }
        return res.status(200).json(receta);
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

const getRecetasByPrestador = async (req, res) => {
    try {
        const prestadorId = req.params.prestadorId;
        const prestador = await db.Prestador.findByPk(prestadorId);
        if (!prestador) {
            return res
                .status(404)
                .json({ message: 'No se encontro el prestador' });
        }
        const recetas = await db.Receta.findAll({
            where: { PrestadorId: prestadorId },
        });
        if (recetas.length === 0) {
            return res.status(404).json({
                message: 'No se encontraron recetas de este prestador',
            });
        }
        return res.status(200).json(recetas);
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

const getRecetasByPrestadorAndEstado = async (req, res) => {
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

        const { rows, count } = await db.Receta.findAndCountAll(options);

        const recetas = rows;
        if (recetas.length === 0) {
            return res.status(404).json({
                message:
                    'No se encontraron recetas de este prestador con el estado indicado',
            });
        }

        return res.status(200).json({ recetas, count });
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

const updateReceta = async (req, res) => {
    try {
        const id = req.params.id;
        const receta = await db.Receta.findByPk(id);

        if (!receta) {
            return res
                .status(404)
                .json({ message: 'No se encontró la receta' });
        }

        const { estado, motivoEstado, PrestadorId } = req.body;

        receta.estado = estado;
        receta.motivoEstado = motivoEstado;
        receta.PrestadorId = PrestadorId;
        await receta.save();

        return res.status(200).json(receta);
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

const createReceta = async (req, res) => {
    try {
        const receta = await db.Receta.create({ ...req.body });
        if (receta === db.Sequelize.ValidationError) {
            return res.status(400).json(receta);
        }
        return res.status(201).json(receta);
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

export default {
    getRecetaById,
    getRecetasByPrestador,
    getRecetasByPrestadorAndEstado,
    updateReceta,
    createReceta,
};
