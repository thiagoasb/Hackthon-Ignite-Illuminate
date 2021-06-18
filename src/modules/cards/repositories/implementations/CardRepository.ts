import { getRepository, Repository } from "typeorm";
import { Card } from "../../entities/Card";
import { ICardRepository, ICreateCardDTO } from "../ICardRepository";


class CardRepository implements ICardRepository {

    private repository: Repository<Card>;

    constructor() {
        this.repository = getRepository(Card);
    }

    async create({ user_id, bank, flag, is_used }: ICreateCardDTO): Promise<void> {
        
        const card = this.repository.create({
            user_id,
            bank,
            is_used,
            flag
        });

        await this.repository.save(card);
    }

    async list(): Promise<Card[]> {
        const cardList = await this.repository.find();

        return cardList;
    }

    async findById(id: string): Promise<Card> {
        const card = await this.repository.findOne(id);

        return card;
    }
}

export {CardRepository}
