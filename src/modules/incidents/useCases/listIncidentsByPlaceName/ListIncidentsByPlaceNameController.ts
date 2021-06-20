import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListIncidentsByPlaceNameUseCase } from "./ListIncidentsByPlaceNameUseCase";

class ListIncidentsByPlaceNameController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { place_name } = request.query;

        const listIncidentsByPlaceNameUseCase = container.resolve(
            ListIncidentsByPlaceNameUseCase
        );

        const listAll = await listIncidentsByPlaceNameUseCase.execute(
            `${place_name}`
        );

        return response.json(listAll);
    }
}

export { ListIncidentsByPlaceNameController };
