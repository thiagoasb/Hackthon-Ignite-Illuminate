import { inject, injectable } from "tsyringe";

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
class UpdateIncidentUseCase {
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
        const incident = await this.incidentRepository.findById(card_id);

        if (value) {
            incident.value = value;
        }

        if (time) {
            incident.time = time;
        }

        if (place_name) {
            incident.place_name = place_name;
        }

        if (street) {
            incident.street = street;
        }

        if (neighborhood) {
            incident.neighborhood = neighborhood;
        }

        if (city) {
            incident.city = city;
        }

        if (state) {
            incident.state = state;
        }

        if (country) {
            incident.country = country;
        }

        if (is_online) {
            incident.is_online = is_online;
        }

        if (service_name) {
            incident.service_name = service_name;
        }

        if (note) {
            incident.note = note;
        }

        if (date) {
            incident.date = date;
        }

        await this.incidentRepository.create(incident);
    }
}

export { UpdateIncidentUseCase };
