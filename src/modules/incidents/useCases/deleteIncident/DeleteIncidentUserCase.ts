import { IIncidentRepository } from "@modules/incidents/infra/typeorm/repositories/IIncidentRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteIncidentUserCase {
    constructor(
        @inject("IncidentRepository")
        private incidentRepository: IIncidentRepository
    ) {}

    async execute(id: string): Promise<void> {
        await this.incidentRepository.delete(id);
    }
}

export { DeleteIncidentUserCase };
