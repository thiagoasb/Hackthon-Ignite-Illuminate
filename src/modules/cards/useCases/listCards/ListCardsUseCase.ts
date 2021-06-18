import { inject, injectable } from "tsyringe";

import { Card } from "../../entities/Card";
import { CardRepository } from "../../repositories/implements/CardRepository";

@injectable()
class ListCardsUseCase {
    constructor(
        @inject("CardRepository")
        private cardRepository: CardRepository
    ) {}

    async execute(): Promise<Card[]> {
        const cards = await this.cardRepository.list();

        return cards;
    }
}

export { ListCardsUseCase };
