import { parseISO } from "date-fns";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password, birthday } = request.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        const parsedBirthday = parseISO(birthday);

        await createUserUseCase.execute({
            name,
            email,
            password,
            birthday: parsedBirthday,
        });

        return response.status(201).send();
    }
}

export { CreateUserController };
