import { response } from "express";
import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListComplimentServiceReceiver{
     async execute(user_id:string){
            const complimentRepository = getCustomRepository(ComplimentsRepositories);
            const compliments = await complimentRepository.find({
                where:{
                    user_receiver:user_id
                },
                //trazer mais informações de objetos relacionados
                relations:["userSender", "userReceiver", "tag"]
            });
           
            //listando todos os elogios recebidos pelo usuario logado
            return compliments;
    }
}

export {ListComplimentServiceReceiver}