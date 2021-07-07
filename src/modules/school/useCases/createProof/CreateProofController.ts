import { Request, Response} from "express"
import { CreateProofUseCase } from "./CreateProofUseCase";
import { container} from "tsyringe";

class CreateProofController {

    async handle(request: Request, response: Response): Promise<Response>{
        const {discipline} = request.body;

        const createProofUseCase = container.resolve(CreateProofUseCase);

        await createProofUseCase.execute({discipline});

        return response.status(201).send();        
    }
}

export { CreateProofController }