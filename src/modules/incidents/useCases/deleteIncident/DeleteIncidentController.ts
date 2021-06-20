import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteIncidentUserCase } from "./DeleteIncidentUserCase";

class DeleteIncidentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteIncidentUseCase = container.resolve(DeleteIncidentUserCase);

        await deleteIncidentUseCase.execute(id);

        return response.send();
    }
}
