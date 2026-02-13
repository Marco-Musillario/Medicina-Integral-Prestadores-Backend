import schemaSituacionModificacion from './schema/schemaSituacionModificacion.js';

const validarSituacionModificacion = (req, res, next) => {
    const { error } = schemaSituacionModificacion.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        return res
            .status(400)
            .json({ message: 'datos invalidos', error: error });
    }
    next();
};
export default validarSituacionModificacion;
