import express from 'express';
import { createPet, deletePet, getPet, getPetAltura, getPetTutor, updatePet } from '../controller/pet_controller.js';
import { verifyJWT } from '../controller/login_controller.js';

const router = express.Router();

// Rotas para consulta, atualização e exclusão na tabela pet
router.get('/pet', verifyJWT, getPet);
router.get('/petTutor/:cpf', verifyJWT, getPetTutor);
router.get('/petAltura/:altura', verifyJWT, getPetAltura)
router.post('/pet', verifyJWT, createPet);
router.put('/pet/:codigo_pet', verifyJWT, updatePet);
router.delete('/pet/:codigo_pet', verifyJWT, deletePet);

export default router;
