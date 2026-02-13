import Joi from 'joi';

const schemaSituacion = Joi.object({
    descripcion: Joi.string().min(3).max(500).required(),
    fechaInicio: Joi.date().required(),
    fechaFin: Joi.alternatives().try(Joi.date(), Joi.valid(null)).required(),
});

export default schemaSituacion;
