import express from 'express';
import { login } from '../controller/login_controller.js';

const router = express.Router();

// Rota para realizar o login e retornar um token
router.post('/login', login);

export default router;