import express from 'express';
import SituacionesController from '../controllers/situacionesController.js';
import validarSituacion from '../middleware/validarSituacion.js';
import validarSituacionModificacion from '../middleware/validarSituacionModificacion.js';

const router = express.Router();

router.get('/:afiliadoId', SituacionesController.getSituacionesByAfiliado);
router.get(
    '/grupoFamiliar/:nroGrupoFamiliar',
    SituacionesController.getSituacionesByGrupoFamiliar
);
router.post(
    '/:afiliadoId',
    validarSituacion,
    SituacionesController.createSituacion
);
router.patch(
    '/:id',
    validarSituacionModificacion,
    SituacionesController.updateSituacion
);

export default router;
