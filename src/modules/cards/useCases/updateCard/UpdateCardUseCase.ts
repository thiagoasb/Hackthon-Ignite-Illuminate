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
        console.log("service => id : ", id);
        console.log("service => bank : ", bank);
        const card = await this.cardRepository.findById(id);
        console.log("service => card : ", card);

        if (bank) {
            card.bank = bank;
        }

        if (flag) {
            card.flag = flag;
        }

        if (is_used) {
            card.is_used = is_used;
        }

        console.log("service => id : ", id);
        console.log("service => bank : ", bank);
        console.log("service => card : ", card);
        await this.cardRepository.save(card);
    }
}

export { UpdateCardUseCase };
