import schemaNota from './schema/schemaNota.js';

const validarNota = (req, res, next) => {
    const { error } = schemaNota.validate(req.body, { abortEarly: false });
    if (error) {
        return res
            .status(400)
            .json({ message: 'datos invalidos', error: error });
    }
    next();
};
export default validarNota;
