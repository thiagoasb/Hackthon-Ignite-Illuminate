import { inject, injectable } from "tsyringe";

import { Incident } from "../../infra/typeorm/entities/Incident";
import { IIncidentRepository } from "../../infra/typeorm/repositories/IIncidentRepository";

@injectable()
class ListIncidentsByServiceNameUseCase {
    constructor(
        @inject("IncidentRepository")
        private incidentRepository: IIncidentRepository
    ) {}
    async execute(service_name: string): Promise<Incident[]> {
        const incidents = await this.incidentRepository.findByServiceName(
            service_name
        );

        return incidents;
    }
}

export { ListIncidentsByServiceNameUseCase };
