import { inject, injectable } from "tsyringe";

import { CardRepository } from "../../infra/typeorm/repositories/implements/CardRepository";

interface IRequest {
    bank?: string;
    flag?: string;
    is_used?: boolean;
    id: string;
}

@injectable()
class UpdateCardUseCase {
    constructor(
        @inject("CardRepository")
        private cardRepository: CardRepository
    ) {}

    async execute({ id, bank, flag, is_used }: IRequest): Promise<void> {
        const card = await this.cardRepository.findById(id);

        if (bank) {
            card.bank = bank;
        }

        if (flag) {
            card.flag = flag;
        }

        if (is_used) {
            card.is_used = is_used;
        }

        await this.cardRepository.create(card);
    }
}

export { UpdateCardUseCase };
