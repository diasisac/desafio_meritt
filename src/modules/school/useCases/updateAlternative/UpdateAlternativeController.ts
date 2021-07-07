import { Request, Response} from "express"
import { UpdateAlternativeUseCase } from "./UpdateAlternativeUseCase";
import { container} from "tsyringe";

class UpdateAlternativeController {

    async handle(request: Request, response: Response): Promise<Response>{
        const {alternative, question_id} = request.body;
        const {id} = request.params;

        const updateAlternativeUseCase = container.resolve(UpdateAlternativeUseCase);

        await updateAlternativeUseCase.execute({alternative, question_id, id});

        return response.status(200).send();        
    }
}

export { UpdateAlternativeController }