import { Card } from "@modules/cards/infra/typeorm/entities/Card";
import { inject, injectable } from "tsyringe";

import { ICardRepository } from "../../infra/typeorm/repositories/ICardRepository";

interface IRequest {
    user_id: string;
    bank: string;
    is_used: boolean;
    flag: string;
}

@injectable()
class CreateCardUseCase {
    constructor(
        @inject("CardRepository")
        private cardRepository: ICardRepository
    ) {}

    async execute({ user_id, bank, is_used, flag }: IRequest): Promise<Card> {
        const card = await this.cardRepository.create({
            user_id,
            bank,
            flag,
            is_used,
        });

        return card;
    }
}

export { CreateCardUseCase };
