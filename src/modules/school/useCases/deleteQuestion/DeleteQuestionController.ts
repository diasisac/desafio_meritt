import { Request, Response} from "express"
import { DeleteQuestionUseCase } from "./DeleteQuestionUseCase";
import { container} from "tsyringe";

class DeleteQuestionController {

    async handle(request: Request, response: Response): Promise<Response>{
        const {id} = request.params;

        const deleteQuestionUseCase = container.resolve(DeleteQuestionUseCase);

        await deleteQuestionUseCase.execute({id});

        return response.status(201).send();        
    }
}

export { DeleteQuestionController }