import { Request, Response} from "express"
import { DeleteProofUseCase } from "./DeleteProofUseCase";
import { container} from "tsyringe";

class DeleteProofController {

    async handle(request: Request, response: Response): Promise<Response>{
        const {id} = request.params;

        const deleteProofUseCase = container.resolve(DeleteProofUseCase);

        await deleteProofUseCase.execute({id});

        return response.status(201).send();        
    }
}

export { DeleteProofController }