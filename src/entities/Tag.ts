import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";
import { Expose } from "class-transformer"
@Entity("tags")
export class Tag {
    @PrimaryColumn()
    readonly id:string;
    @Column()
    nome:string;

    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at:Date;

    // criando uma string a mais 
    @Expose({name:"NameCustom"})
    NameCustom():string{
        return `#${this.nome}`
    }
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}
