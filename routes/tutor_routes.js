import express from 'express';
import { createTutor, deleteTutor, getTutores, updateTutor } from '../controller/tutor_controller.js';
import { verifyJWT } from '../controller/login_controller.js';

const router = express.Router();

// Rotas para consulta, atualização e exclusão na tabela tutor
router.get('/tutor', verifyJWT, getTutores);
router.post('/tutor', verifyJWT, createTutor);
router.put('/tutor/:cpf', verifyJWT, updateTutor);
router.delete('/tutor/:cpf', verifyJWT, deleteTutor);

export default router;
