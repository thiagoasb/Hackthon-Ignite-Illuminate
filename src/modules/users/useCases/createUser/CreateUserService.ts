/* eslint-disable import/no-duplicates */
import { hash } from "bcryptjs";
import { startOfDay } from "date-fns";
import differenceInYears from "date-fns/differenceInCalendarDays";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
    name: string;
    email: string;
    password: string;
    birthday: Date;
}

@injectable()
class CreateUserService {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({
        name,
        email,
        password,
        birthday,
    }: IRequest): Promise<void> {
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
                "You must be at least 18 years older to create an account"
            );
        }

        const passwordHash = await hash(password, 10);

        this.userRepository.create({
            name,
            email,
            password: passwordHash,
            birthday,
        });
    }
}

export { CreateUserService };
