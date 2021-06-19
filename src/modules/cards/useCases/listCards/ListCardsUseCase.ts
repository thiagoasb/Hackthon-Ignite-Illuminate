import { inject, injectable } from "tsyringe";

import { Card } from "../../entities/Card";
import { CardRepository } from "../../repositories/implements/CardRepository";

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
