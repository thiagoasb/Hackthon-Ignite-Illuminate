import { IUserRepository } from "@modules/users/infra/typeorm/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}

export { DeleteUserUseCase };
