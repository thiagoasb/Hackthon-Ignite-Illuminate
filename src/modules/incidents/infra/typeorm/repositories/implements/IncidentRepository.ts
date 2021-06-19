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
        console.log("incidentRepository -> Create() => : ", card_id);
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
        console.log("findCardById -> id : ", card_id);
        const incidentCard = this.repositoryORM.find({
            where: { card_id },
            relations: ["card"],
        });
        console.log("findCardById -> incidentCard : ", incidentCard);
        return incidentCard;
    }

    async list(): Promise<Incident[]> {
        const incidentList = this.repositoryORM.find();
        return incidentList;
    }
}

export { IncidentRepository };
