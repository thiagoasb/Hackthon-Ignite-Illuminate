import { parseISO } from "date-fns";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserService } from "./CreateUserService";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password, birthday } = request.body;

        const createUserService = container.resolve(CreateUserService);

        const parsedBirthday = parseISO(birthday);

        await createUserService.execute({
            name,
            email,
            password,
            birthday: parsedBirthday,
        });

        return response.status(201).send();
    }
}

export { CreateUserController };
