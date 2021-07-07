import { Router } from "express";
import {CreateAlternativeController} from "../modules/school/useCases/createAlternative/CreateAlternativeController";
import {ListAlternativesController} from "../modules/school/useCases/listAlternative/ListAlternativesController";
import {UpdateAlternativeController} from "../modules/school/useCases/updateAlternative/UpdateAlternativeController";
import {DeleteAlternativeController} from "../modules/school/useCases/deleteAlternative/DeleteAlternativeController";

const alternativesRoutes = Router();

const createAlternativeController = new CreateAlternativeController();
const listAlternativeController = new ListAlternativesController();
const updateAlternativeController = new UpdateAlternativeController();
const deleteAlternativeController = new DeleteAlternativeController();

alternativesRoutes.post("/",createAlternativeController.handle);

alternativesRoutes.get("/", listAlternativeController.handle);

alternativesRoutes.put("/update/:id", updateAlternativeController.handle);

alternativesRoutes.delete("/delete/:id", deleteAlternativeController.handle);

export { alternativesRoutes };