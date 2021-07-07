import { Question } from "../entities/Question";

interface ICreateQuestionDTO{
    number: string;
    utterance: string;
    proof_id:string;
}

interface IUpdateQuestionDTO{
    id:string;
    number: string;
    utterance: string;
    proof_id:string;
}

interface IDeleteQuestionDTO{
    id:string;
}

interface IQuestitonsRepository {
    create({ number, utterance, proof_id}: ICreateQuestionDTO): Promise<void>;
    findByName(number:string): Promise<Question|undefined>;
    findById(id:string): Promise<Question | undefined>;
    list(): Promise<Question[]>;
    update({id , number, utterance, proof_id}: IUpdateQuestionDTO): Promise<void>;
    delete({ id }: IDeleteQuestionDTO): Promise<void>;
}

export { IQuestitonsRepository, ICreateQuestionDTO, IUpdateQuestionDTO, IDeleteQuestionDTO}