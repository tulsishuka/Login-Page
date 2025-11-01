
import express from 'express';
import login from '../controllers/authControllers.js';
const router = express.Router();

// Correct route
router.post('/login', login);

export default router;

