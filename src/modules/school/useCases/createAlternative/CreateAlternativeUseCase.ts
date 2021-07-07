import { AlternativesRepository } from "../../repositories/implementations/AlternativesRepository";
import {inject, injectable} from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { QuestionsRepository } from "../../repositories/implementations/QuestionsRepository";

interface IRequest {
    alternative: string;
    question_id:string;
}

@injectable()
class CreateAlternativeUseCase{
    constructor (
        @inject("AlternativesRepository")
        private alternativesRepository: AlternativesRepository,
        private questionsRepository: QuestionsRepository
        ){}

    async execute({alternative,question_id}: IRequest): Promise<void>{
        const alternativeAlreadyExists = await this.alternativesRepository.findByName(alternative);
        const questionsAlreadyExists = await this.questionsRepository.findById(question_id);

        if(alternativeAlreadyExists){
            throw new AppError("Alternative already exists!");
        }

        if(!questionsAlreadyExists){
            throw new AppError("Id of question not exists!");   
        }

    this.alternativesRepository.create({ alternative, question_id});
    }
}

export { CreateAlternativeUseCase }