import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateIncidentUseCase } from "./CreateIncidentUseCase";

class CreateIncidentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            card_id,
            value,
            time,
            place_name,
            street,
            neighborhood,
            city,
            state,
            country,
            is_online,
            service_name,
            note,
            date,
        } = request.body;

        const createIncidentUseCase = container.resolve(CreateIncidentUseCase);

        const incident = await createIncidentUseCase.execute({
            card_id,
            value,
            time,
            place_name,
            street,
            neighborhood,
            city,
            state,
            country,
            is_online,
            service_name,
            note,
            date,
        });

        return response.status(201).json(incident);
    }
}

export { CreateIncidentController };
