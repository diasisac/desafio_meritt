import { Request, Response} from "express"
import { UpdateProofUseCase } from "./UpdateProofUseCase";
import { container} from "tsyringe";

class UpdateProofController {

    async handle(request: Request, response: Response): Promise<Response>{
        const {discipline} = request.body;
        const {id} = request.params;

        const updateProofUseCase = container.resolve(UpdateProofUseCase);

        await updateProofUseCase.execute({discipline, id});

        return response.status(200).send();        
    }
}

export { UpdateProofController }