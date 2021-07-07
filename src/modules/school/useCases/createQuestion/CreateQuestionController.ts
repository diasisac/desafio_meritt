import { Request, Response} from "express"
import { CreateQuestionUseCase } from "./CreateQuestionUseCase";
import { container} from "tsyringe";

class CreateQuestionController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { number, utterance, proof_id} = request.body;
        
        const createQuestionUseCase = container.resolve(CreateQuestionUseCase);
        
        await createQuestionUseCase.execute({number, utterance, proof_id});

        return response.status(201).send();        
    }
}

export { CreateQuestionController }