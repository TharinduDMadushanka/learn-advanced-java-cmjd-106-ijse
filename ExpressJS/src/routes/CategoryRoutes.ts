import express from 'express';
import { createCategory, getCategory } from '../controllers/CategoryController';

const router = express.Router();

// POST route to create a category
router.post("/category", createCategory);

// GET route to fetch categories
router.get("/categories", getCategory);

export default router;
