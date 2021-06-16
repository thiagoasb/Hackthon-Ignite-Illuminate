import { Router } from "express";

import { AuthenticateUserController } from "../modules/users/useCases/authenticateUser/AuthenticateUserController";

const authRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authRoutes.post("/session", authenticateUserController.handle);

export { authRoutes };
