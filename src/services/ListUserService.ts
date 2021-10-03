import { response } from "express";
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import {classToPlain} from "class-transformer"

class ListUserService{
    async execute(user_id:string){
         const users = getCustomRepository(UsersRepositories);

         const listUser = await users.find();
         const verifyAdmin = await users.findOne(user_id);
         const { admin } = verifyAdmin;

         console.log(admin);
         if(admin == false){
             throw new Error("Lista de Usuário não disponivel para este usuário!");
         }   
         return classToPlain(listUser);
    }   
}

export{ListUserService}