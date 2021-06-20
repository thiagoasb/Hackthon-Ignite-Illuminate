import { Card } from "@modules/cards/infra/typeorm/entities/Card";

import { ICardRepository, ICreateCardDTO } from "../ICardRepository";

class CardRepositoryInMemory implements ICardRepository {
    private cards: Card[] = [];

    async create({
        user_id,
        bank,
        flag,
        is_used,
    }: ICreateCardDTO): Promise<Card> {
        const card = new Card();

        Object.assign(card, {
            user_id,
            bank,
            flag,
            is_used,
        });

        this.cards.push(card);

        return card;
    }
    async list(): Promise<Card[]> {
        return this.cards;
    }
    async findByUserId(user_id: string): Promise<Card[]> {
        const listCards = this.cards.filter((card) => card.user_id === user_id);

        return listCards;
    }
    async findById(id: string): Promise<Card> {
        return this.cards.find((card) => card.id === id);
    }
    save(card: Card): Promise<Card> {
        throw new Error("Method not implemented.");
    }
}

export { CardRepositoryInMemory };
