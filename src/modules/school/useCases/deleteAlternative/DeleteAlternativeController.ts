import { Request, Response} from "express"
import { DeleteAlternativeUseCase } from "./DeleteAlternativeUseCase";
import { container} from "tsyringe";

class DeleteAlternativeController {

    async handle(request: Request, response: Response): Promise<Response>{
        const {id} = request.params;

        const deleteAlternativeUseCase = container.resolve(DeleteAlternativeUseCase);

        await deleteAlternativeUseCase.execute({id});

        return response.status(200).send();        
    }
}

export { DeleteAlternativeController }