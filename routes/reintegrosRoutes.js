import express from 'express';
import ReintegrosController from '../controllers/reintegrosController.js';
import validarSolicitudModificacion from '../middleware/validarSolicitudModificacion.js';
import validarReintegro from '../middleware/validarReintegro.js';

const router = express.Router();

router.get('/:id', ReintegrosController.getReintegroById);
router.get(
    '/prestador/:prestadorId',
    ReintegrosController.getReintegrosByPrestador
);
router.get(
    '/prestador/:prestadorId/:estados',
    ReintegrosController.getReintegrosByPrestadorAndEstado
);
router.patch(
    '/:id',
    validarSolicitudModificacion,
    ReintegrosController.updateReintegro
);
router.post('/', validarReintegro, ReintegrosController.createReintegro);

export default router;
