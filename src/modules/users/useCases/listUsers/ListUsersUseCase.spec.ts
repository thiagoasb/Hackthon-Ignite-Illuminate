import { UserRepositoryInMemory } from "@modules/users/infra/typeorm/repositories/implementations/UserRepositoryInMemory";
import { parseISO } from "date-fns";

import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { ListUsersUseCase } from "./ListUsersUseCase";

let userRepositoryInMemory: UserRepositoryInMemory;
let listUserUseCase: ListUsersUseCase;
let createUserUseCase: CreateUserUseCase;
describe("List an user", () => {
    beforeAll(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        listUserUseCase = new ListUsersUseCase(userRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    });

    it("should be able to list all users", async () => {
        const user = await createUserUseCase.execute({
            name: "Fulano",
            email: "fulano@gmail.com",
            password: "12345",
            birthday: parseISO("1997-04-23T18:25:43.511Z"),
        });

        const users = await listUserUseCase.execute();

        expect(users).toEqual([user]);
    });
});
