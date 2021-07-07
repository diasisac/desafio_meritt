import { Alternative } from "../entities/Alternative";

interface ICreateAlternativeDTO{
    alternative:string;
    question_id: string;
}

interface IUpdateAlternativeDTO{
    id:string;
    alternative:string;
    question_id: string;
}

interface IDeleteAlternativeDTO{
    id:string;
}

interface IAlternativesRepository {
    create({alternative, question_id}: ICreateAlternativeDTO): Promise<void>;
    findByName(alternative:string): Promise<Alternative | undefined>;
    list(): Promise<Alternative[]>;
    update({alternative, id}: IUpdateAlternativeDTO): Promise<void>;
    delete({ id }: IDeleteAlternativeDTO): Promise<void>;
}

export {IAlternativesRepository, ICreateAlternativeDTO, IUpdateAlternativeDTO, IDeleteAlternativeDTO }