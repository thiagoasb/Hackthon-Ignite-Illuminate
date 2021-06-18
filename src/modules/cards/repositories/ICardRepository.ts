import { Card } from "../entities/Card";

interface ICreateCardDTO {
    id?: string;
    user_id: string;
    bank: string;
    flag: string;
    is_used: boolean;
}

interface ICardRepository {
    create({ user_id, bank, flag, is_used }: ICreateCardDTO): Promise<void>;
    list(): Promise<Card[]>;
    findById(id: string): Promise<Card>;
}

export { ICardRepository, ICreateCardDTO };
