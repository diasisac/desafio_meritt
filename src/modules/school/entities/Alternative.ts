import {v4 as uuidv4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("alternatives")
class Alternative {
    @PrimaryColumn()
    id?: string;

    @Column()
    alternative: string;
    
    @Column()
    question_id: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id)
        this.id = uuidv4();
    }
}
export { Alternative };