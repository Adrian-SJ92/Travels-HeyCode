import express from 'express';
import userControllers from './user.controllers.js';

const router = express.Router();

router.get("/", userControllers.getUser)
router.post("/register", userControllers.register)

export default router;