import { inject, injectable } from "tsyringe";

import { Card } from "../../infra/typeorm/entities/Card";
import { CardRepository } from "../../infra/typeorm/repositories/implements/CardRepository";

@injectable()
class ListCardsUseCase {
    constructor(
        @inject("CardRepository")
        private cardRepository: CardRepository
    ) {}

    async execute(user_id: string): Promise<Card[]> {
        const cards = await this.cardRepository.findByUserId(user_id);

        return cards;
    }
}

export { ListCardsUseCase };
