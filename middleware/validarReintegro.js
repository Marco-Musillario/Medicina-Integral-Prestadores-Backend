import schemaReintegro from './schema/schemaReintegro.js';

const validarReintegro = (req, res, next) => {
    const { error } = schemaReintegro.validate(req.body, { abortEarly: false });
    if (error) {
        return res
            .status(400)
            .json({ message: 'datos invalidos', error: error });
    }
    next();
};
export default validarReintegro;
