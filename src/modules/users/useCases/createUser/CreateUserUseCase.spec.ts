import { AppError } from "@errors/AppError";
import { UserRepositoryInMemory } from "@modules/users/infra/typeorm/repositories/implementations/UserRepositoryInMemory";
import { parseISO } from "date-fns";

import { CreateUserUseCase } from "./CreateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;
describe("Create user", () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    });

    it("should be able to create a new user", async () => {
        const user = await createUserUseCase.execute({
            name: "Fulano",
            email: "fulano@gmail.com",
            password: "12345",
            birthday: parseISO("1997-04-23T18:25:43.511Z"),
        });

        expect(user).toHaveProperty("name");
        expect(user).toHaveProperty("email");
        expect(user).toHaveProperty("password");
    });

    it("should not be able to create a user to the same email", async () => {
        await createUserUseCase.execute({
            name: "Fulano",
            email: "fulano@gmail.com",
            password: "12345",
            birthday: parseISO("1997-04-23T18:25:43.511Z"),
        });

        await expect(
            createUserUseCase.execute({
                name: "Sicrano",
                email: "fulano@gmail.com",
                password: "12345",
                birthday: parseISO("1997-04-23T18:25:43.511Z"),
            })
        ).rejects.toEqual(
            new AppError(
                "This email is already in use! Login to access your account."
            )
        );
    });

    it("should not be able to create a user with age less than 18", async () => {
        await expect(
            createUserUseCase.execute({
                name: "Sicrano",
                email: "fulano@gmail.com",
                password: "12345",
                birthday: parseISO("2004-04-23T18:25:43.511Z"),
            })
        ).rejects.toEqual(
            new AppError(
                "You must be at least 18 years older to create an account."
            )
        );
    });
});
