import { AlternativesRepository } from "../../repositories/implementations/AlternativesRepository";
import {inject, injectable} from "tsyringe";

interface IRequest {
    id:string;
}

@injectable()
class DeleteAlternativeUseCase{
    constructor (
        @inject("AlternativesRepository")
        private alternativesRepository: AlternativesRepository){}

    async execute({ id }: IRequest): Promise<void>{

    this.alternativesRepository.delete({id});
    }
}

export { DeleteAlternativeUseCase }