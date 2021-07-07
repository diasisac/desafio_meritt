import { AlternativesRepository } from "../../repositories/implementations/AlternativesRepository";
import {inject, injectable} from "tsyringe";

interface IRequest {
    id:string;
    alternative: string;
    question_id:string;
}

@injectable()
class UpdateAlternativeUseCase{
    constructor (
        @inject("AlternativesRepository")
        private alternativesRepository: AlternativesRepository){}

    async execute({question_id,alternative, id}: IRequest): Promise<void>{

    this.alternativesRepository.update({ question_id,alternative, id});
    }
}

export { UpdateAlternativeUseCase }