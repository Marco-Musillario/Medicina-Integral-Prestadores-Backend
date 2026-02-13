import Joi from 'joi';

const schemaSolicitudModificacion = Joi.object({
    estado: Joi.string()
        .min(8)
        .max(11)
        .valid('En análisis', 'Observado', 'Aprobado', 'Rechazado')
        .required(),
    motivoEstado: Joi.when('estado', {
        is: Joi.string().valid('Observado', 'Rechazado'),
        then: Joi.string().min(3).max(500).required(),
        otherwise: Joi.valid(null),
    }),
    PrestadorId: Joi.number(),
});

export default schemaSolicitudModificacion;
