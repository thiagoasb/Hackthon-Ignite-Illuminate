import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCardsUseCase } from "./ListCardsUseCase";

class ListCardsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = request.params;
        const listCardsUseCase = container.resolve(ListCardsUseCase);

        const cards = await listCardsUseCase.execute(user_id);

        return response.json(cards);
    }
}

export { ListCardsController };
