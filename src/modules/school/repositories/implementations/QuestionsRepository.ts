import { Question } from "../../entities/Question";
import { IQuestitonsRepository, ICreateQuestionDTO, IDeleteQuestionDTO, IUpdateQuestionDTO } from "../IQuestionsRepository";
import { getRepository, Repository} from "typeorm";

class QuestionsRepository implements IQuestitonsRepository {
    
    private repository: Repository<Question>;

    constructor(){
        this.repository = getRepository(Question);
     }

    async create({ number, utterance, proof_id }: ICreateQuestionDTO):Promise<void> {
        const question = this.repository.create({
            number,
            utterance,
            proof_id
        })
        await this.repository.save(question);
    }

    async list():Promise<Question[]> {
        const question = await this.repository.find();
        return question;
    }

    async findByName(number: string): Promise<Question | undefined> {
        const question = await this.repository.findOne({number});
        return question;
    }

    async findById(id: string): Promise<Question | undefined> {
        const question = await this.repository.findOne({id});
        return question;
    }

    async update({ id, number, utterance, proof_id }: IUpdateQuestionDTO): Promise<void> {
        await this.repository.update(id, { number, utterance, proof_id});
    }
    
    async delete({ id }: IDeleteQuestionDTO): Promise<void> {
        await this.repository.delete(id);
    }
}   
export { QuestionsRepository }