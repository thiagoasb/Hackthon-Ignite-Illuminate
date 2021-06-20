import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteCardUseCase } from "./DeleteCardUseCase";

class DeleteCardController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteCardUseCase = container.resolve(DeleteCardUseCase);

        await deleteCardUseCase.execute(id);

        return response.send();
    }
}

export { DeleteCardController };
