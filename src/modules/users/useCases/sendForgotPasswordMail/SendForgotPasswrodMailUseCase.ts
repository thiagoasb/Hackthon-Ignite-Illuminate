import { AppError } from "@errors/AppError";
import { IUserRepository } from "@modules/users/infra/typeorm/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import { v4 as uuid } from "uuid";

import { IMailProvider } from "@shared/providers/MailProvider/IMailProvider";

@injectable()
class SendForgotPasswrodMailUseCase {
    constructor(
        @inject("UserRepository")
        private usersRepository: IUserRepository,
        @inject("EtheralMailProvider")
        private mailProvider: IMailProvider
    ) {}

    async execute(email: string): Promise<void> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError("User does not exists!");
        }

        const token = uuid();

        await this.mailProvider.sendMail(
            email,
            "Recuperação de senha",
            `O link para o reset é ${token}`
        );
    }
}

export { SendForgotPasswrodMailUseCase };
