import { CardRepositoryInMemory } from "@modules/cards/infra/typeorm/repositories/implements/CardRepositoryInMemory";
import { UserRepositoryInMemory } from "@modules/users/infra/typeorm/repositories/implementations/UserRepositoryInMemory";
import { CreateUserUseCase } from "@modules/users/useCases/createUser/CreateUserUseCase";
import { parseISO } from "date-fns";

import { CreateCardUseCase } from "../createCard/CreateCardUseCase";
import { ListCardsUseCase } from "./ListCardsUseCase";

let cardRepositoryInMemory: CardRepositoryInMemory;
let listCardsUseCase: ListCardsUseCase;
let createCardUseCase: CreateCardUseCase;
let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe("List cards", () => {
    beforeEach(() => {
        cardRepositoryInMemory = new CardRepositoryInMemory();
        listCardsUseCase = new ListCardsUseCase(cardRepositoryInMemory);

        cardRepositoryInMemory = new CardRepositoryInMemory();
        createCardUseCase = new CreateCardUseCase(cardRepositoryInMemory);

        userRepositoryInMemory = new UserRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    });

    it("should be able to list all cards to a specific user", async () => {
        const user = await createUserUseCase.execute({
            name: "Fulano",
            email: "fulano@gmail.com",
            password: "12345",
            birthday: parseISO("1997-04-23T18:25:43.511Z"),
        });

        const card = await createCardUseCase.execute({
            bank: "bb",
            flag: "visa",
            is_used: true,
            user_id: user.id,
        });

        const cards = await listCardsUseCase.execute(user.id);

        console.log(cards);

        // expect(cards).toEqual([card]);
    });
});
