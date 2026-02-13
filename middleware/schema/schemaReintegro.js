import Joi from 'joi';

const schemaReintegro = Joi.object({
    fecha: Joi.date().required(),
    estado: Joi.string().required(),
    asunto: Joi.string().required(),
    especialidad: Joi.string().required(),
    lugar: Joi.string().required(),
    fechaFactura: Joi.date().required(),
    cuitFacturado: Joi.string().required(),
    valorFacturado: Joi.number().required(),
    personaFacturada: Joi.string().required(),
    formaDePago: Joi.string().required(),
    cbu: Joi.number().required(),
    observacion: Joi.string().required(),
    AfiliadoId: Joi.number().required(),
    PrestadorId: Joi.number().required(),
});

export default schemaReintegro;
