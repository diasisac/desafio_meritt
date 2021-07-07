import { Request, Response} from "express"
import { CreateAlternativeUseCase } from "./CreateAlternativeUseCase";
import { container} from "tsyringe";

class CreateAlternativeController {

    async handle(request: Request, response: Response): Promise<Response>{
        const {alternative,question_id} = request.body;

        const createAlternativeUseCase = container.resolve(CreateAlternativeUseCase);

        await createAlternativeUseCase.execute({alternative,question_id});

        return response.status(201).send();        
    }
}

export { CreateAlternativeController }