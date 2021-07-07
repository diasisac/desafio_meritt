import { Router } from "express";
import {CreateProofController} from "../modules/school/useCases/createProof/CreateProofController";
import {ListProofsController} from "../modules/school/useCases/listProof/ListProofsController";
import {UpdateProofController} from "../modules/school/useCases/updateProof/UpdateProofController";
import {DeleteProofController} from "../modules/school/useCases/deleteProof/DeleteProofController";

const proofsRoutes = Router();

const createProofController = new CreateProofController();
const listProofController = new ListProofsController();
const updateProofController = new UpdateProofController();
const deleteProofController = new DeleteProofController();

proofsRoutes.post("/",createProofController.handle);

proofsRoutes.get("/", listProofController.handle);

proofsRoutes.put("/update/:id", updateProofController.handle);

proofsRoutes.delete("/delete/:id", deleteProofController.handle);

export { proofsRoutes };