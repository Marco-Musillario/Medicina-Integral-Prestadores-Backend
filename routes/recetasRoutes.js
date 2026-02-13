import express from 'express';
import RecetasController from '../controllers/recetasController.js';
import validarSolicitudModificacion from '../middleware/validarSolicitudModificacion.js';
import validarReceta from '../middleware/validarReceta.js';

const router = express.Router();

router.get('/:id', RecetasController.getRecetaById);
router.get('/prestador/:prestadorId', RecetasController.getRecetasByPrestador);
router.get(
    '/prestador/:prestadorId/:estados',
    RecetasController.getRecetasByPrestadorAndEstado
);
router.patch(
    '/:id',
    validarSolicitudModificacion,
    RecetasController.updateReceta
);
router.post('/', validarReceta, RecetasController.createReceta);

export default router;
