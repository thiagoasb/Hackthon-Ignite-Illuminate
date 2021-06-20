import { ICardRepository } from "@modules/cards/infra/typeorm/repositories/ICardRepository";
import { inject, injectable } from "tsyringe";

import { Card } from "../../infra/typeorm/entities/Card";

@injectable()
class ListCardsUseCase {
    constructor(
        @inject("CardRepository")
        private cardRepository: ICardRepository
    ) {}

    async execute(user_id: string): Promise<Card[]> {
        const cards = await this.cardRepository.findByUserId(user_id);

        return cards;
    }
}

export { ListCardsUseCase };
