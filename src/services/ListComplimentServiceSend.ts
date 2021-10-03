import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListComplimentServiceSend{
     async execute(user_id:string){
            const complimentRepository = getCustomRepository(ComplimentsRepositories);
            const compliments = complimentRepository.find({
                where:{
                    user_sender:user_id
                },
                relations:["userSender", "userReceiver", "tag"]
            });
            //listando todos os elogios enviados pelo usuario logado
            return compliments;
    }
}

export {ListComplimentServiceSend}