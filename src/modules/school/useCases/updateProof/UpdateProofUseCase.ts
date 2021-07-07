import { ProofsRepository } from "../../repositories/implementations/ProofsRepository";
import {inject, injectable} from "tsyringe";

interface IRequest {
    id:string;
    discipline: string;
}

@injectable()
class UpdateProofUseCase{
    constructor (
        @inject("ProofsRepository")
        private proofsRepository: ProofsRepository){}

    async execute({discipline, id}: IRequest): Promise<void>{

    this.proofsRepository.update({ discipline, id});
    }
}

export { UpdateProofUseCase }