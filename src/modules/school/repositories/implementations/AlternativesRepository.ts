import { Alternative } from "../../entities/Alternative";
import { IAlternativesRepository, ICreateAlternativeDTO, IUpdateAlternativeDTO, IDeleteAlternativeDTO } from "../IAlternativesRepository";
import { getRepository, Repository} from "typeorm";
import {getConnection} from "typeorm"; 
import { AppError } from "../../../../errors/AppError";

class AlternativesRepository implements IAlternativesRepository{

    private repository: Repository<Alternative>;

 constructor(){
        this.repository = getRepository(Alternative);
    }

    async create({ alternative, question_id }: ICreateAlternativeDTO): Promise<void>{

        const alternativ = this.repository.create({
            alternative,
            question_id
        })
        await this.repository.save(alternativ);
    }

    async list():Promise <Alternative[]>{
        const alternativ = await this.repository.find();
        return alternativ;
    }

    async findByName(alternative: string):Promise<Alternative | undefined>{
        const alternativ = await this.repository.findOne({alternative});
        return alternativ;
    }

    async update({ alternative, id }: IUpdateAlternativeDTO): Promise<void> {
        await this.repository.update(id, { alternative});
    }

    async delete({ id }: IDeleteAlternativeDTO): Promise<void>{
        await this.repository.delete(id);
    }
}
export { AlternativesRepository };