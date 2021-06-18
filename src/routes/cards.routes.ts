import { Router } from "express";

import { CreateCardController } from "../modules/cards/useCases/createCard/CreateCardController";

const createCardController = new CreateCardController();

const cardsRoutes = Router();

cardsRoutes.post("/", createCardController.handle);

export { cardsRoutes };
