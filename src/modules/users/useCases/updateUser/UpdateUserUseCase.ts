import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { UserRepository } from "../../infra/typeorm/repositories/implementations/UserRepository";

interface IRequest {
    id: string;
    name: string;
    email: string;
    password: string;
    birthday: Date;
}

@injectable()
class UpdateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: UserRepository
    ) {}

    async execute({
        id,
        name,
        email,
        password,
        birthday,
    }: IRequest): Promise<void> {
        const user = await this.userRepository.findById(id);
        if (name) {
            user.name = name;
        }

        if (email) {
            user.email = email;
        }

        if (password) {
            user.password = await hash(password, 10);
        }

        if (birthday) {
            user.birthday = birthday;
        }

        await this.userRepository.create(user);
    }
}

export { UpdateUserUseCase };
