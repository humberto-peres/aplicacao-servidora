import express from 'express';
import { getAltura } from '../controller/altura_pet_controller.js';
import { verifyJWT } from '../controller/login_controller.js';

const router = express.Router();

// Rota para consulta na tabela altura_pet
router.get('/altura_pet', verifyJWT, getAltura);

export default router;
