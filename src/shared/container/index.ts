import { container } from "tsyringe";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";
import { UserRepository } from "../../modules/users/repositories/implementations/UserRepository";
import { ICardRepository } from "../../modules/cards/repositories/ICardRepository";
import { CardRepository } from "../../modules/cards/repositories/implementations/CardRepository";


container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<ICardRepository>("CardRepository", CardRepository);
