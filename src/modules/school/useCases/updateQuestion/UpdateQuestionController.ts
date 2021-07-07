import { Request, Response} from "express"
import { UpdateQuestionUseCase } from "./UpdateQuestionUseCase";
import { container} from "tsyringe";

class UpdateQuestionController {

    async handle(request: Request, response: Response): Promise<Response>{
        const {number, utterance, proof_id} = request.body;
        const {id} = request.params;

        const updateQuestionUseCase = container.resolve(UpdateQuestionUseCase);

        await updateQuestionUseCase.execute({number, utterance, proof_id, id});

        return response.status(200).send();        
    }
}

export { UpdateQuestionController }