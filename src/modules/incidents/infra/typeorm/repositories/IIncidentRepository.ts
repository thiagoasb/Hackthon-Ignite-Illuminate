import { Incident } from "../entities/Incident";

interface ICreateIncidentDTO {
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
}

interface IIncidentRepository {
    create({
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
    }: ICreateIncidentDTO): Promise<void>;
    findByCardId(card_id: string): Promise<Incident[]>;
    findById(id: string): Promise<Incident>;
    list(): Promise<Incident[]>;
}

export { IIncidentRepository, ICreateIncidentDTO };
