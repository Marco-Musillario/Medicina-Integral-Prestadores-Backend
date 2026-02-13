import db from '../database/models/index.js';

const getSituacionesByAfiliado = async (req, res) => {
    try {
        const afiliadoId = req.params.afiliadoId;

        const pagina = parseInt(req.query.pagina);
        const tamaño = parseInt(req.query.tamaño);

        const options = {
            where: { AfiliadoId: afiliadoId },
            limit: tamaño,
            offset: (pagina - 1) * tamaño,
            order: [['fechaInicio', 'DESC']],
        };

        const busqueda = req.query.busqueda;
        if (busqueda && busqueda.trim() !== '') {
            options.where[db.Sequelize.Op.and] = [
                ...(options.where[db.Sequelize.Op.and] || []),
                { descripcion: { [db.Sequelize.Op.like]: `%${busqueda}%` } },
            ];
        }

        const soloActivas = req.query.soloActivas;
        if (soloActivas && soloActivas === 'true') {
            const hoy = new Date();
            options.where[db.Sequelize.Op.and] = [
                ...(options.where[db.Sequelize.Op.and] || []),
                {
                    [db.Sequelize.Op.or]: [
                        { fechaFin: null },
                        { fechaFin: { [db.Sequelize.Op.gt]: hoy } },
                    ],
                },
            ];
        }

        const { rows, count } = await db.Situacion.findAndCountAll(options);
        const situaciones = rows;
        if (situaciones.length === 0) {
            return res.status(404).json({
                message: 'No se encontraron situaciones del afiliado',
            });
        }
        return res.status(200).json({ situaciones, count });
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

const getSituacionesByGrupoFamiliar = async (req, res) => {
    try {
        const nroGrupoFamiliar = req.params.nroGrupoFamiliar;
        const grupoFamiliar = await db.Afiliado.findAll({
            where: { numeroGrupoFamiliar: nroGrupoFamiliar },
            include: { model: db.Situacion, as: 'situaciones' },
        });
        if (!grupoFamiliar) {
            res.status(404).json({
                message: 'No se encontraron afiliados del grupo familiar',
            });
        }
        let situaciones = [];
        for (const afiliado of grupoFamiliar) {
            for (const situacion of afiliado.situaciones) {
                situaciones.push(situacion);
            }
        }
        return res.status(200).json(situaciones);
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

const createSituacion = async (req, res) => {
    try {
        const afiliadoId = req.params.afiliadoId;
        const afiliado = await db.Afiliado.findByPk(afiliadoId);
        if (!afiliado) {
            return res
                .status(404)
                .json({ message: 'No se encontro el afiliado' });
        }
        const situacion = await db.Situacion.create({
            ...req.body,
            AfiliadoId: afiliadoId,
        });
        if (situacion === db.Sequelize.ValidationError) {
            return res.status(400).json(situacion);
        }
        return res.status(201).json(situacion);
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

const updateSituacion = async (req, res) => {
    try {
        const id = req.params.id;
        const situacion = await db.Situacion.findByPk(id);
        if (!situacion) {
            return res
                .status(404)
                .json({ message: 'No se encontro la situacion' });
        }
        const { fechaFin } = req.body;
        situacion.fechaFin = fechaFin;
        await situacion.save();
        return res.status(200).json(situacion);
    } catch (error) {
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: error.message,
        });
    }
};

export default {
    getSituacionesByAfiliado,
    getSituacionesByGrupoFamiliar,
    createSituacion,
    updateSituacion,
};
