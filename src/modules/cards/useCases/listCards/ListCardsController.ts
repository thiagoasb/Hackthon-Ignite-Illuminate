import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCardsUseCase } from "./ListCardsUseCase";

class ListCardsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listCardsUseCase = container.resolve(ListCardsUseCase);

        const cards = await listCardsUseCase.execute();

        return response.json(cards);
    }
}

export { ListCardsController };
