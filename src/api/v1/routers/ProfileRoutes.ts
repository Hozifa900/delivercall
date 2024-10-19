import { Router } from "express";
import profileController from "../controllers/ProfileController";

const router = Router();

router.post("/profiles", profileController.createProfile);
router.get("/profiles/:email", profileController.getProfileByEmail);

export default router;
