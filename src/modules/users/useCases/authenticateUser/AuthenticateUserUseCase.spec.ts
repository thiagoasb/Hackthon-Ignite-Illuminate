import { UserRepositoryInMemory } from "@modules/users/infra/typeorm/repositories/implementations/UserRepositoryInMemory";
import { parseISO } from "date-fns";

import { AppError } from "../../../../errors/AppError";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let userRepositoryInMemory: UserRepositoryInMemory;
let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;
describe("should be able to authenticate an user", () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(
            userRepositoryInMemory
        );
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    });

    it("should be able to authenticate an user", async () => {
        await createUserUseCase.execute({
            name: "Fulano",
            email: "fulano@gmail.com",
            password: "12345",
            birthday: parseISO("1997-04-23T18:25:43.511Z"),
        });

        const token = await authenticateUserUseCase.execute({
            email: "fulano@gmail.com",
            password: "12345",
        });

        expect(token).toHaveProperty("user");
        expect(token).toHaveProperty("token");
    });

    it("should not be able to authenticate an user with wrong email", async () => {
        await createUserUseCase.execute({
            name: "Fulano",
            email: "fulano@gmail.com",
            password: "12345",
            birthday: parseISO("1997-04-23T18:25:43.511Z"),
        });

        await expect(
            authenticateUserUseCase.execute({
                email: "emailerrado@gmail.com",
                password: "12345",
            })
        ).rejects.toEqual(new AppError("Username or Password Incorrect!"));
    });

    it("should not be able to authenticate an user with wrong password", async () => {
        await createUserUseCase.execute({
            name: "Fulano",
            email: "fulano@gmail.com",
            password: "12345",
            birthday: parseISO("1997-04-23T18:25:43.511Z"),
        });

        await expect(
            authenticateUserUseCase.execute({
                email: "fulano@gmail.com",
                password: "wrong password",
            })
        ).rejects.toEqual(new AppError("Username or Password Incorrect!"));
    });
});
