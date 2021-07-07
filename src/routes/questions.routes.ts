import { Router } from "express";
import { CreateQuestionController }  from "../modules/school/useCases/createQuestion/CreateQuestionController";
import { ListQuestionsController} from "../modules/school/useCases/listQuestion/ListQuestionsController";
import { UpdateQuestionController} from "../modules/school/useCases/updateQuestion/UpdateQuestionController";
import { DeleteQuestionController } from "../modules/school/useCases/deleteQuestion/DeleteQuestionController";

const questionsRoutes = Router();

const createQuestionController = new CreateQuestionController();
const listQuestionsController = new ListQuestionsController();
const updateQuestionsController = new UpdateQuestionController();
const deleteQuestionController = new DeleteQuestionController();

questionsRoutes.post("/", createQuestionController.handle);

questionsRoutes.get("/", listQuestionsController.handle);

questionsRoutes.put("/update/:id", updateQuestionsController.handle);

questionsRoutes.delete("/delete/:id", deleteQuestionController.handle);

export { questionsRoutes };