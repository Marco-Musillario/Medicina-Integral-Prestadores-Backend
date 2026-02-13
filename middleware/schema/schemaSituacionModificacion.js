import Joi from 'joi';

const schemaSituacionModificacion = Joi.object({
    fechaFin: Joi.alternatives().try(Joi.date(), Joi.valid(null)).required(),
});

export default schemaSituacionModificacion;
