import { SendForgotPasswrodMailController } from "@modules/users/useCases/sendForgotPasswordMail/SendForgotPasswrodMailController";
import { Router } from "express";

const passwordRoutes = Router();

const sendForgotPasswrodMailController = new SendForgotPasswrodMailController();

passwordRoutes.post("/forgot", sendForgotPasswrodMailController.handle);

export { passwordRoutes };
