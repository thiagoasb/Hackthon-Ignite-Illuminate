import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUsersService } from "./ListUsersService";

class ListUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listUsersService = container.resolve(ListUsersService);

        const listAll = await listUsersService.execute();

        return response.json(listAll);
    }
}

export { ListUserController };
