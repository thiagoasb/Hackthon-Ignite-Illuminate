import { container } from "tsyringe";

import { ICardRepository } from "../../modules/cards/infra/typeorm/repositories/ICardRepository";
import { CardRepository } from "../../modules/cards/infra/typeorm/repositories/implements/CardRepository";
import { IIncidentRepository } from "../../modules/incidents/infra/typeorm/repositories/IIncidentRepository";
import { IncidentRepository } from "../../modules/incidents/infra/typeorm/repositories/implements/IncidentRepository";
import { UserRepository } from "../../modules/users/infra/typeorm/repositories/implementations/UserRepository";
import { IUserRepository } from "../../modules/users/infra/typeorm/repositories/IUserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<ICardRepository>("CardRepository", CardRepository);
container.registerSingleton<IIncidentRepository>(
    "IncidentRepository",
    IncidentRepository
);
