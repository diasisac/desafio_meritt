import { Router } from "express";
import { proofsRoutes } from './proofs.routes';
import { questionsRoutes } from './questions.routes';
import { alternativesRoutes } from './alternatives.routes';

const router = Router();

router.use("/proofs",proofsRoutes);
router.use("/questions",questionsRoutes);
router.use("/alternatives",alternativesRoutes);

export { router }