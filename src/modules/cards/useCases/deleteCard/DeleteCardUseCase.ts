import { ICardRepository } from "@modules/cards/infra/typeorm/repositories/ICardRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteCardUseCase {
    constructor(
        @inject("CardRepository")
        private cardRepository: ICardRepository
    ) {}

    async execute(id: string): Promise<void> {
        await this.cardRepository.delete(id);
    }
}

export { DeleteCardUseCase };
