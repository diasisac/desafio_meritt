import { Proof } from "../entities/Proof";

interface ICreateProofDTO{
    discipline:string;
}

interface IUpdateProofDTO{
    id:string;
    discipline:string;
}

interface IDeleteProofDTO{
    id:string;
}

interface IProofsRepository {
    create({discipline}: ICreateProofDTO): Promise<void>;
    findByName(discipline:string): Promise<Proof | undefined>;
    findById(id:string): Promise<Proof | undefined>;
    list(): Promise<Proof[]>;
    update({discipline, id}: IUpdateProofDTO): Promise<void>;
    delete({ id }: IDeleteProofDTO): Promise<void>;
}

export {IProofsRepository, ICreateProofDTO, IUpdateProofDTO, IDeleteProofDTO }