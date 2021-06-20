import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCardUseCase } from "./UpdateCardUseCase";

class UpdateCardController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { bank, flag, is_used } = request.body;
        console.log("controller => id : ", id);

        const updateCardUseCase = container.resolve(UpdateCardUseCase);

        await updateCardUseCase.execute({ id, bank, flag, is_used });

        return response.status(204).send();
    }
}

export { UpdateCardController };
