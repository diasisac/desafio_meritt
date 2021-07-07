import { Alternative } from "../../entities/Alternative";
import { IAlternativesRepository } from "../../repositories/IAlternativesRepository";
import {inject, injectable} from "tsyringe";

@injectable()
class ListAlternativesUseCase {

    constructor (
        @inject("AlternativesRepository")
        private alternativesRepository: IAlternativesRepository ) {}

    async execute(): Promise<Alternative[]>{
        const alternatives = await this.alternativesRepository.list();

        return alternatives.sort(() => .5 - Math.random());
    }
}

export { ListAlternativesUseCase }