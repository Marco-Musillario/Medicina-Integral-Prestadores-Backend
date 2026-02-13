import express from 'express';
import RegistroSolicitudController from '../controllers/registroSolicitudController.js';
import validarRegistroSolicitud from '../middleware/validarRegistroSolicitud.js';

const router = express.Router();

router.get(
    '/:prestadorId',
    RegistroSolicitudController.getRegistrosByPrestadorAndDate
);
router.post(
    '/',
    validarRegistroSolicitud,
    RegistroSolicitudController.createRegistro
);

export default router;
