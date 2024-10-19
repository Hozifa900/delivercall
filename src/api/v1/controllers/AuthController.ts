import { Request, Response } from "express";
import authService from "../services/AuthService";

class AuthController {
  register = async (req: Request, res: Response) => {
    try {
      const user = await authService.register(req.body);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const token = await authService.login(req.body);
      res.status(200).json({ token });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
}

export default new AuthController();
