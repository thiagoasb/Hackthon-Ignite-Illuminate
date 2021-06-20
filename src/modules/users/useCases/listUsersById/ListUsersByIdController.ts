import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUsersByIdUseCase } from "./ListUsersByIdUseCase";

class ListUserByIdController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const listUsersByIdUseCase = container.resolve(ListUsersByIdUseCase);

        const listAll = await listUsersByIdUseCase.execute(id);

        return response.json(listAll);
    }
}

export { ListUserByIdController };
