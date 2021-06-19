import { inject, injectable } from "tsyringe";

import { Incident } from "../../infra/typeorm/entities/Incident";
import { IIncidentRepository } from "../../infra/typeorm/repositories/IIncidentRepository";

@injectable()
class ListIncidentsUseCase {
    constructor(
        @inject("IncidentRepository")
        private incidentRepository: IIncidentRepository
    ) {}
    async execute(card_id: string): Promise<Incident[]> {
        const incidents = await this.incidentRepository.findByCardId(card_id);

        return incidents;
    }
}

export { ListIncidentsUseCase };
