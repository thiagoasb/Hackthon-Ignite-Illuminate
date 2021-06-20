import { CardRepositoryInMemory } from "@modules/cards/infra/typeorm/repositories/implements/CardRepositoryInMemory";
import { UserRepositoryInMemory } from "@modules/users/infra/typeorm/repositories/implementations/UserRepositoryInMemory";
import { CreateUserUseCase } from "@modules/users/useCases/createUser/CreateUserUseCase";
import { parseISO } from "date-fns";

import { CreateCardUseCase } from "./CreateCardUseCase";

let createCardUseCase: CreateCardUseCase;
let cardRepositoryInMemory: CardRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;
describe("Create Card", () => {
    beforeEach(() => {
        cardRepositoryInMemory = new CardRepositoryInMemory();
        createCardUseCase = new CreateCardUseCase(cardRepositoryInMemory);

        userRepositoryInMemory = new UserRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    });

    it("should be able to create a new card", async () => {
        await createUserUseCase.execute({
            name: "Fulano",
            email: "fulano@gmail.com",
            password: "12345",
            birthday: parseISO("1997-04-23T18:25:43.511Z"),
        });

        const user = await userRepositoryInMemory.findByEmail(
            "fulano@gmail.com"
        );

        const card = await createCardUseCase.execute({
            bank: "bb",
            flag: "visa",
            is_used: true,
            user_id: user.id,
        });

        expect(card).toHaveProperty("bank");
        expect(card).toHaveProperty("flag");
        expect(card).toHaveProperty("is_used");
        expect(card).toHaveProperty("user_id");
    });
});
