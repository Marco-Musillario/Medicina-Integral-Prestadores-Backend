import express from 'express';
import AfiliadosController from '../controllers/afiliadosController.js';

const router = express.Router();

router.get('/:id', AfiliadosController.getAfiliadoById);
router.get(
    '/grupo-familiar/:nroGrupoFamiliar',
    AfiliadosController.getGrupoFamiliar
);
router.post('/', AfiliadosController.createAfiliado);
router.put('/:id', AfiliadosController.updateAfiliado);
router.delete('/:id', AfiliadosController.deleteAfiliado);

export default router;
