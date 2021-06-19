import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListIncidentsUseCase } from "./ListIncidentsUseCase";

class ListIncidentsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { card_id } = request.params;
        const listIncidentsUseCase = container.resolve(ListIncidentsUseCase);

        const listAll = await listIncidentsUseCase.execute(card_id);

        return response.json(listAll);
    }
}

export { ListIncidentsController };
