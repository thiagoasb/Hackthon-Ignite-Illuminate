import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListIncidentsByCardIdUseCase } from "./ListIncidentsByCardIdUseCase";

class ListIncidentsByCardIdController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { card_id } = request.params;
        const listIncidentsByCardIdUseCase = container.resolve(
            ListIncidentsByCardIdUseCase
        );

        const listAll = await listIncidentsByCardIdUseCase.execute(card_id);

        return response.json(listAll);
    }
}

export { ListIncidentsByCardIdController };
