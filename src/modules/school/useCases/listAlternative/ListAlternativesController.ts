import { Request, Response} from "express";
import { ListAlternativesUseCase } from "./ListAlternativesUseCase";
import { container} from "tsyringe";

class ListAlternativesController{
    async handle(request: Request, response: Response): Promise<Response>{
        
        const listAlternativeUseCase = container.resolve(ListAlternativesUseCase)
        
        const all = await listAlternativeUseCase.execute();

        return response.json(all);        
    }
}

export { ListAlternativesController }