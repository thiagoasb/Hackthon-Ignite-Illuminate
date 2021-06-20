import { getRepository, Repository } from "typeorm";

import { Incident } from "../../entities/Incident";
import {
    ICreateIncidentDTO,
    IIncidentRepository,
} from "../IIncidentRepository";

class IncidentRepository implements IIncidentRepository {
    private repositoryORM: Repository<Incident>;

    constructor() {
        this.repositoryORM = getRepository(Incident);
    }

    async create({
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
    }: ICreateIncidentDTO): Promise<void> {
        const novoqrcode = "hauhauhauua";
        const incident = this.repositoryORM.create({
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
            qrcode: novoqrcode,
        });

        await this.repositoryORM.save(incident);
    }

    async findByCardId(card_id: string): Promise<Incident[]> {
        const incidentCard = this.repositoryORM.find({
            where: { card_id },
            relations: ["card"],
        });

        return incidentCard;
    }

    async findById(id: string): Promise<Incident> {
        const incident = this.repositoryORM.findOne(id);
        return incident;
    }

    async list(): Promise<Incident[]> {
        const incidentList = this.repositoryORM.find();
        return incidentList;
    }

    async save(incident: Incident): Promise<Incident> {
        return this.repositoryORM.save(incident);
    }
}

export { IncidentRepository };
