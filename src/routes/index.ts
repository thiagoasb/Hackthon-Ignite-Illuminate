import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { authRoutes } from "./authenticate.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use(authRoutes);

export { router };