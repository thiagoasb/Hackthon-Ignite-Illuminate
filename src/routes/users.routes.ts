import { Router } from "express";
import { ListUserController } from "../modules/users/useCases/listUsers/ListUsersController";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";

const createUserController = new CreateUserController();
const listUsersController = new ListUserController();

const usersRoutes = Router();

usersRoutes.get("/", listUsersController.handle);
usersRoutes.post("/", createUserController.handle);

export { usersRoutes };