// routes/storeRoute.js
import express from 'express';
import { createNewStore, findStoresByOwnerId } from '../controller/storeController.js';

const router = express.Router();

// Create a new store
router.post('/create', createNewStore);

// Find stores by owner's ID
router.get('/:ownerId', findStoresByOwnerId);

export default router;
