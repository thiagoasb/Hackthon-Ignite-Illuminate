import { inject, injectable } from "tsyringe";

import { User } from "../../infra/typeorm/entities/User";
import { IUserRepository } from "../../infra/typeorm/repositories/IUserRepository";

@injectable()
class ListUsersByIdUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}
    async execute(id: string): Promise<User[]> {
        const users = await this.userRepository.listById(id);

        return users;
    }
}

export { ListUsersByIdUseCase };
