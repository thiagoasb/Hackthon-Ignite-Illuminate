import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateIncidentUseCase } from "./UpdateIncidentUseCase";

class UpdateIncidentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

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

        const updateIncidentUseCase = container.resolve(UpdateIncidentUseCase);

        await updateIncidentUseCase.execute({
            id,
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

        return response.status(204).send();
    }
}

export { UpdateIncidentController };
