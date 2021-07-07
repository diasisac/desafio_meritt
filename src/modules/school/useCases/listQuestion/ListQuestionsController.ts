import { Request, Response} from "express";
import { ListQuestionsUseCase } from "./ListQuestionsUseCase";
import { container} from "tsyringe";

class ListQuestionsController{
    async handle(request: Request, response: Response): Promise<Response>{

        const listQuestionsUseCase = container.resolve(ListQuestionsUseCase);

        const all = await listQuestionsUseCase.execute();

        return response.json(all);        
    }
}

export { ListQuestionsController }