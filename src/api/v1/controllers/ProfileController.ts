import { Request, Response } from "express";
import profileService from "../services/ProfileService";

class ProfileController {
  async createProfile(req: Request, res: Response) {
    try {
      const profile = await profileService.createProfile(req.body);
      res.status(201).json(profile);
    } catch (err: any) {
      res
        .status(500)
        .json({ error: "Failed to create profile", message: err.message });
    }
  }

  async getProfileByEmail(req: Request, res: Response) {
    try {
      const profile = await profileService.getProfileByEmail(req.params.email);
      if (profile) {
        res.status(200).json(profile);
      } else {
        res.status(404).json({ error: "Profile not found" });
      }
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch profile" });
    }
  }
}

export default new ProfileController();
