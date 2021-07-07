import { QuestionsRepository } from "../../repositories/implementations/QuestionsRepository";
import {inject, injectable} from "tsyringe";

interface IRequest {
    id:string;
    number: string;
    utterance :string;
    proof_id:string;
}

@injectable()
class UpdateQuestionUseCase{
    constructor (
        @inject("QuestionsRepository")
        private questionsRepository: QuestionsRepository){}

    async execute({number,utterance ,proof_id, id}: IRequest): Promise<void>{

    this.questionsRepository.update({ number,utterance ,proof_id, id });
    }
}

export { UpdateQuestionUseCase }