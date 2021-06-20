import { User } from "@modules/users/infra/typeorm/entities/User";
/* eslint-disable import/no-duplicates */
import { hash } from "bcryptjs";
import { startOfDay } from "date-fns";
import differenceInYears from "date-fns/differenceInCalendarDays";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUserRepository } from "../../infra/typeorm/repositories/IUserRepository";

interface IRequest {
    name: string;
    email: string;
    password: string;
    birthday: Date;
}

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({
        name,
        email,
        password,
        birthday,
    }: IRequest): Promise<User> {
        const emailAlreadyExists = await this.userRepository.findByEmail(email);

        if (emailAlreadyExists) {
            throw new AppError(
                "This email is already in use! Login to access your account."
            );
        }

        const currentTime = startOfDay(new Date());

        const parsedBirthday = startOfDay(birthday);

        const age = differenceInYears(currentTime, parsedBirthday) / 360;

        if (age < 18) {
            throw new AppError(
                "You must be at least 18 years older to create an account."
            );
        }

        const passwordHash = await hash(password, 10);

        const user = this.userRepository.create({
            name,
            email,
            password: passwordHash,
            birthday,
        });

        return user;
    }
}

export { CreateUserUseCase };
