import { Router } from "express";

import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { ListUserController } from "../modules/users/useCases/listUsers/ListUsersController";
import { UpdateUserController } from "../modules/users/useCases/updateUser/UpdateUserController";

const createUserController = new CreateUserController();
const listUsersController = new ListUserController();
const updateUserController = new UpdateUserController();

const usersRoutes = Router();

usersRoutes.get("/", listUsersController.handle);
usersRoutes.post("/", createUserController.handle);
usersRoutes.put("/:id", updateUserController.handle);

export { usersRoutes };
