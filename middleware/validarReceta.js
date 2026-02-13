import schemaReceta from './schema/schemaReceta.js';

const validarReceta = (req, res, next) => {
    const { error } = schemaReceta.validate(req.body, { abortEarly: false });
    if (error) {
        return res
            .status(400)
            .json({ message: 'datos invalidos', error: error });
    }
    next();
};
export default validarReceta;
