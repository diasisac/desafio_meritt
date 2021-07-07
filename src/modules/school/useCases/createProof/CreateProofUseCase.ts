import { ProofsRepository } from "../../repositories/implementations/ProofsRepository";
import {inject, injectable} from "tsyringe";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
    discipline: string;
}

@injectable()
class CreateProofUseCase{
    constructor (
        @inject("ProofsRepository")
        private proofsRepository: ProofsRepository){}

    async execute({discipline}: IRequest): Promise<void>{
        const proofAlreadyExists = await this.proofsRepository.findByName(discipline);

    if(proofAlreadyExists){
        throw new AppError("Discipline already exists!");
    }

    this.proofsRepository.create({ discipline});
    }
}

export { CreateProofUseCase }