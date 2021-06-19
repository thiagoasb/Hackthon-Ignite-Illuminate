import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IIncidentRepository } from "../../infra/typeorm/repositories/IIncidentRepository";

interface IRequest {
    card_id: string;
    value: string;
    time: Date;
    place_name?: string;
    street?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    country?: string;
    is_online: boolean;
    service_name?: string;
    note?: string;
    date: Date;
    qrcode?: string;
}

@injectable()
class CreateIncidentUseCase {
    constructor(
        @inject("IncidentRepository")
        private incidentRepository: IIncidentRepository
    ) {}
    async execute({
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
    }: IRequest): Promise<void> {
        const card = await this.incidentRepository.findByCardId(card_id);

        if (!card) {
            throw new AppError("Card not found!");
        }

        if (!place_name && !service_name) {
            throw new AppError(
                "You must provide at least the local name or the website/service name where the incident ocurred"
            );
        }

        if (!time) {
            throw new AppError(
                "You must provide the time where the incident ocurred."
            );
        }

        this.incidentRepository.create({
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
    }
}

export { CreateIncidentUseCase };
