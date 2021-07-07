import { Proof } from "../../entities/Proof";
import { IProofsRepository, ICreateProofDTO, IUpdateProofDTO, IDeleteProofDTO } from "../IProofsRepository";
import { getRepository, Repository} from "typeorm";

class ProofsRepository implements IProofsRepository{

    private repository: Repository<Proof>;

 constructor(){
        this.repository = getRepository(Proof);
    }

    async create({ discipline }: ICreateProofDTO): Promise<void>{
        const proof = this.repository.create({
            discipline
        })
        await this.repository.save(proof);
    }

    async list():Promise <Proof[]>{
        const proof = await this.repository.find();
        return proof;
    }

    async findByName(discipline: string):Promise<Proof | undefined>{
        const proof = await this.repository.findOne({discipline});
        return proof;
    }

    async findById(id: string): Promise<Proof | undefined> {
        const proof = await this.repository.findOne({id});
        return proof;
    }

    async update({ discipline, id }: IUpdateProofDTO): Promise<void> {
        await this.repository.update(id, { discipline: discipline});
    }

    async delete({ id }: IDeleteProofDTO): Promise<void>{
        await this.repository.delete(id);
    }
}
export { ProofsRepository };