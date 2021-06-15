import { container } from "tsyringe";
import { IUserRepository } from "src/modules/users/repositories/IUserRepository";
import { UserRepository } from "src/modules/users/repositories/implementations/UserRepository";


container.registerSingleton<IUserRepository>(
  "UserRepository",
    UserRepository
  );

