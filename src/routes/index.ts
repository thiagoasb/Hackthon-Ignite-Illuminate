import { Router } from "express";

import { authRoutes } from "./authenticate.routes";
import { cardsRoutes } from "./cards.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/cards", cardsRoutes);
router.use(authRoutes);

export { router };
