import { Router } from "express";
import authController from "../controllers/AuthController";
const router = Router();

router.post("/new", authController.register);
router.post("/login", authController.login);

export default router;
