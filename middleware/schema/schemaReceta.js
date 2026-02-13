import Joi from 'joi';

const schemaReceta = Joi.object({
    fecha: Joi.date().required(),
    estado: Joi.string().required(),
    asunto: Joi.string().required(),
    medicamento: Joi.string().required(),
    cantidad: Joi.number().required(),
    presentacion: Joi.string().required(),
    observacion: Joi.string().required(),
    AfiliadoId: Joi.number().required(),
    PrestadorId: Joi.number().required(),
});

export default schemaReceta;
