import express from 'express';
import prestadoresController from '../controllers/prestadoresController.js';

const router = express.Router();

router.post('/registrar', prestadoresController.registrarUsuario);
router.post('/validar', prestadoresController.validatePassword);
router.get('/medicos/:centroId', prestadoresController.getMedicosDeCentro);

export default router;
