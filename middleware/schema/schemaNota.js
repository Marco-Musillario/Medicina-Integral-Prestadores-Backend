import Joi from 'joi';

const schemaNota = Joi.object({
    descripcion: Joi.string().min(3).max(500).required(),
    motivo: Joi.string().min(3).max(75).required(),
    doctor: Joi.string().min(3).max(30).required(),
    fecha: Joi.date().required(),
});

export default schemaNota;
