import { Router } from "express";
import { userRoutes } from "./users.routes";

const router = Router();

userRoutes.use("/users", userRoutes);

export { router };