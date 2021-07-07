import { Request, Response} from "express";
import { ListProofsUseCase } from "./ListProofsUseCase";
import { container} from "tsyringe";

class ListProofsController{
    async handle(request: Request, response: Response): Promise<Response>{
        
        const listProofUseCase = container.resolve(ListProofsUseCase)
        
        const all = await listProofUseCase.execute();

        return response.json(all);        
    }
}

export { ListProofsController }