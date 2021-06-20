import { getRepository, Repository } from "typeorm";

import { Card } from "../../entities/Card";
import { ICardRepository, ICreateCardDTO } from "../ICardRepository";

class CardRepository implements ICardRepository {
    private repository: Repository<Card>;

    constructor() {
        this.repository = getRepository(Card);
    }

    async create({
        user_id,
        bank,
        flag,
        is_used,
    }: ICreateCardDTO): Promise<Card> {
        const card = this.repository.create({
            user_id,
            bank,
            is_used,
            flag,
        });

        await this.repository.save(card);

        return card;
    }

    async list(): Promise<Card[]> {
        const cardList = await this.repository.find();

        return cardList;
    }

    async findByUserId(user_id: string): Promise<Card[]> {
        const card = await this.repository.find({
            where: { user_id },
            relations: ["user"],
        });

        return card;
    }

    async findById(id: string): Promise<Card> {
        const card = await this.repository.findOne(id);

        return card;
    }
    async save(card: Card): Promise<Card> {
        return this.repository.save(card);
    }
}

export { CardRepository };
