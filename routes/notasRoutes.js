import express from 'express';
import NotasController from '../controllers/notasController.js';
import validarNota from '../middleware/validarNota.js';

const router = express.Router();

router.get('/:afiliadoId', NotasController.getNotasByAfiliado);
router.get(
    '/:afiliadoId/:prestador',
    NotasController.getNotasByAfiliadoAndPrestador
);
router.post('/:turnoId', validarNota, NotasController.createNota);
router.patch('/:id', NotasController.updateNota);

export default router;
