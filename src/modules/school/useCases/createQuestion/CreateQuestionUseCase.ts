import { QuestionsRepository } from "../../repositories/implementations/QuestionsRepository";
import { ProofsRepository } from "../../repositories/implementations/ProofsRepository";
import {inject, injectable} from "tsyringe";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
    number: string;
    utterance: string;
    proof_id:string;
}
@injectable()
class CreateQuestionUseCase {
    constructor (
        @inject("QuestionsRepository")
        private questionsRepository: QuestionsRepository,
        private proofsRepository: ProofsRepository
        ){}

    async execute({number, utterance, proof_id}: IRequest): Promise<void> {
    
    const questionAlreadyExists = await this.questionsRepository.findByName(number);
    const proofsAlreadyExists = await this.proofsRepository.findById(proof_id);

    if(questionAlreadyExists){
        throw new AppError("Question already exists!");
    }

    if(!proofsAlreadyExists){
        throw new AppError("Id of proof not exists!");
    }

    this.questionsRepository.create({number, utterance, proof_id});
    }
}

export { CreateQuestionUseCase }