import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserService {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const userLogin = await this.userRepository.findByEmail(email);

        if (!userLogin) {
            throw new AppError("Username or Password Incorrect!");
        }

        const passwordMatch = await compare(password, userLogin.password);

        if (!passwordMatch) {
            throw new AppError("Username or Password Incorrect!");
        }

        const token = sign({}, "9770ec278de94e4f8ac74ff9e1817df6", {
            subject: userLogin.id,
            expiresIn: "7d",
        });

        const tokenReturn: IResponse = {
            user: {
                name: userLogin.name,
                email: userLogin.email,
            },
            token,
        };

        return tokenReturn;
    }
}

export { AuthenticateUserService };
