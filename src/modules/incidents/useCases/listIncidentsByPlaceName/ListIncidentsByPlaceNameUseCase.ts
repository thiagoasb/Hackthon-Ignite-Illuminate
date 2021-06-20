import { inject, injectable } from "tsyringe";

import { Incident } from "../../infra/typeorm/entities/Incident";
import { IIncidentRepository } from "../../infra/typeorm/repositories/IIncidentRepository";

@injectable()
class ListIncidentsByPlaceNameUseCase {
    constructor(
        @inject("IncidentRepository")
        private incidentRepository: IIncidentRepository
    ) {}
    async execute(place_name: string): Promise<Incident[]> {
        const incidents = await this.incidentRepository.findByPlaceName(
            place_name
        );

        return incidents;
    }
}

export { ListIncidentsByPlaceNameUseCase };
