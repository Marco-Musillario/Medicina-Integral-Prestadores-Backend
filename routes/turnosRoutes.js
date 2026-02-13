import express from 'express';
import TurnosController from '../controllers/turnosController.js';

const router = express.Router();

router.get('/:prestadorId', TurnosController.getTurnosByPrestador);
router.get(
    '/:prestadorId/:especialidad',
    TurnosController.getTurnosByPrestadorAndEspecialidad
);
router.get(
    '/:prestadorId/fecha/:fecha',
    TurnosController.getTurnosByPrestadorAndFecha
);
router.post('/', TurnosController.createTurno);
router.patch('/:id', TurnosController.updateTurno);

export default router;
