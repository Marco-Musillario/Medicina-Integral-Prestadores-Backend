import Joi from 'joi';

const schemaAutorizacion = Joi.object({
    fecha: Joi.date().required(),
    estado: Joi.string().required(),
    asunto: Joi.string().required(),
    lugar: Joi.string().required(),
    observacion: Joi.string().required(),
    AfiliadoId: Joi.number().required(),
    PrestadorId: Joi.number().required(),
});

export default schemaAutorizacion;
