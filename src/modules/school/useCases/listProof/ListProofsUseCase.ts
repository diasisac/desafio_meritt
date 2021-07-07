import { Proof } from "../../entities/Proof";
import { IProofsRepository } from "../../repositories/IProofsRepository";
import {inject, injectable} from "tsyringe";

@injectable()
class ListProofsUseCase {

    constructor (
        @inject("ProofsRepository")
        private proofsRepository: IProofsRepository ) {}

    async execute(): Promise<Proof[]>{
        const proofs = await this.proofsRepository.list();

        return proofs;
    }
}

export { ListProofsUseCase }