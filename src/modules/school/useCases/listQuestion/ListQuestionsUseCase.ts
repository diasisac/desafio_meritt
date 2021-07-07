import { Question } from "../../entities/Question";
import { IQuestitonsRepository } from "../../repositories/IQuestionsRepository";
import {inject, injectable} from "tsyringe";

@injectable()
class ListQuestionsUseCase {
    constructor (
        @inject("QuestionsRepository")
        private questionsRepository: IQuestitonsRepository ) {}

    async execute(): Promise<Question[]>{
        const questions = await this.questionsRepository.list();

        return questions;
    }
}

export { ListQuestionsUseCase }