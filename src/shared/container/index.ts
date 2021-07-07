import {container} from "tsyringe";
import { IProofsRepository } from "../../modules/school/repositories/IProofsRepository";
import { ProofsRepository } from "../../modules/school/repositories/implementations/ProofsRepository";
import { IQuestitonsRepository } from "../../modules/school/repositories/IQuestionsRepository";
import { QuestionsRepository } from "../../modules/school/repositories/implementations/QuestionsRepository";
import { IAlternativesRepository } from "../../modules/school/repositories/IAlternativesRepository";
import { AlternativesRepository } from "../../modules/school/repositories/implementations/AlternativesRepository";
container.registerSingleton<IProofsRepository>(
    "ProofsRepository",
    ProofsRepository
);
container.registerSingleton<IQuestitonsRepository>(
    "QuestionsRepository",
    QuestionsRepository
);
container.registerSingleton<IAlternativesRepository>(
    "AlternativesRepository",
    AlternativesRepository
);