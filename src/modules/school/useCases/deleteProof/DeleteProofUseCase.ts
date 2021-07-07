import { ProofsRepository } from "../../repositories/implementations/ProofsRepository";
import {inject, injectable} from "tsyringe";

interface IRequest {
    id:string;
}

@injectable()
class DeleteProofUseCase{
    constructor (
        @inject("ProofsRepository")
        private proofsRepository: ProofsRepository){}

    async execute({ id }: IRequest): Promise<void>{

    this.proofsRepository.delete({id});
    }
}

export { DeleteProofUseCase }