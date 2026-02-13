import express from 'express';
import AutorizacionesController from '../controllers/autorizacionesController.js';
import validarSolicitudModificacion from '../middleware/validarSolicitudModificacion.js';
import validarAutorizacion from '../middleware/validarAutorizacion.js';

const router = express.Router();

router.get('/:id', AutorizacionesController.getAutorizacionById);
router.get(
    '/prestador/:prestadorId',
    AutorizacionesController.getAutorizacionesByPrestador
);
router.get(
    '/prestador/:prestadorId/:estados',
    AutorizacionesController.getAutorizacionesByPrestadorAndEstado
);
router.patch(
    '/:id',
    validarSolicitudModificacion,
    AutorizacionesController.updateAutorizacion
);
router.post(
    '/',
    validarAutorizacion,
    AutorizacionesController.createAutorizacion
);

export default router;
