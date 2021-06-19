import { Router } from "express";

import { CreateCardController } from "../modules/cards/useCases/createCard/CreateCardController";
import { ListCardsController } from "../modules/cards/useCases/listCards/ListCardsController";

const createCardController = new CreateCardController();
const listCardController = new ListCardsController();

const cardsRoutes = Router();

cardsRoutes.post("/", createCardController.handle);
cardsRoutes.get("/:user_id", listCardController.handle);

export { cardsRoutes };
