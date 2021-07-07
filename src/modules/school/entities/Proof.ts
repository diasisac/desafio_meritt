import {v4 as uuidv4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("proofs")
class Proof {
    @PrimaryColumn()
    id?: string;

    @Column()
    discipline: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id)
        this.id = uuidv4();
    }
}
export { Proof };