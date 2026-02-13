import schemaSolicitudModificacion from './schema/schemaSolicitudModificacion.js';

const validarSolicitudModificacion = (req, res, next) => {
    const { error } = schemaSolicitudModificacion.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        return res
            .status(400)
            .json({ message: 'datos invalidos', error: error });
    }
    next();
};
export default validarSolicitudModificacion;
