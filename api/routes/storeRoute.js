// routes/storeRoute.js
import express from 'express';
import { createNewStore } from '../controller/storeController.js';

const router = express.Router();

// Create a new store
router.post('/create', createNewStore);

export default router;
