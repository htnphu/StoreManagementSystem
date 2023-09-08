// routes/ownerRoute.js
import express from "express";
import { registerOwner } from '../controller/ownerController.js';

const router = express.Router();

// Register owner
router.post('/register', registerOwner);

export default router;
