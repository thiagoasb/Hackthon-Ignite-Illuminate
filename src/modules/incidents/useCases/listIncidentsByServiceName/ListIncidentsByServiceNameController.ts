import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListIncidentsByServiceNameUseCase } from "./ListIncidentsByServiceNameUseCase";

class ListIncidentsByServiceNameController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { service_name } = request.query;
        console.log(service_name);

        const listIncidentsByServiceNameUseCase = container.resolve(
            ListIncidentsByServiceNameUseCase
        );

        const listAll = await listIncidentsByServiceNameUseCase.execute(
            `${service_name}`
        );

        return response.json(listAll);
    }
}

export { ListIncidentsByServiceNameController };
