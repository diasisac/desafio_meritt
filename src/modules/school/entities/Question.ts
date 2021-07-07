import {v4 as uuidv4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
@Entity("questions")
class Question {
    @PrimaryColumn()
    id?: string;
    
    @Column()
    number: string;

    @Column()
    utterance: string;

    @Column()
    proof_id:string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id)
        this.id = uuidv4();
    }
}
export { Question };