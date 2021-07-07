import { QuestionsRepository } from "../../repositories/implementations/QuestionsRepository";
import {inject, injectable} from "tsyringe";

interface IRequest {
    id:string;
}

@injectable()
class DeleteQuestionUseCase{
    constructor (
        @inject("QuestionsRepository")
        private questionsRepository: QuestionsRepository){}

    async execute({ id }: IRequest): Promise<void>{

    this.questionsRepository.delete({id});
    }
}

export { DeleteQuestionUseCase }