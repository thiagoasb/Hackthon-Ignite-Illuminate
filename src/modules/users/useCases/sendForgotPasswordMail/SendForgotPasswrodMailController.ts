import { Request, Response } from "express";
import { container } from "tsyringe";

import { SendForgotPasswrodMailUseCase } from "./SendForgotPasswrodMailUseCase";

class SendForgotPasswrodMailController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = request.body;
        const sendForgotPasswordMailUseCase = container.resolve(
            SendForgotPasswrodMailUseCase
        );

        await sendForgotPasswordMailUseCase.execute(email);

        return response.send();
    }
}

export { SendForgotPasswrodMailController };
