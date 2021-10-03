import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Exclude } from "class-transformer";
//referenciando a tabela users
@Entity("users")
//definindo tabela e colunas
 class User {
    @PrimaryColumn()
    //obs readonly informa que o id sera somente para leitura, a inserção será feit pela entidade
    readonly id: string;
    /*
    obs: Se na tabela o nome for diferente que aqui, colaca-se dentro do @column("nome_da_coluna_na tabela_existente")
     */
    @Column()
    nome:string;
    @Column()
    email:string;
    @Column()
    admin:boolean;
    @Exclude()
    @Column()
    password:string;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}
 
export{ User };