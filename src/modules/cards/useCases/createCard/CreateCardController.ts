import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCardUseCase } from "./CreateCardUseCase";

class CreateCardController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id, bank, is_used, flag } = request.body;

        const createCardUseCase = container.resolve(CreateCardUseCase);

        await createCardUseCase.execute({ user_id, bank, is_used, flag });

        return response.status(201).send();
    }
}

export { CreateCardController };
