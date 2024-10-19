import { Router } from "express";

const router = Router();

router.post("/ai", (req, res) => {
  console.log("The api request is: ", req.body);
  res.status(200).json({ request: req.body });
});

// router.get("/profiles/:email", profileController.getProfileByEmail);

export default router;
