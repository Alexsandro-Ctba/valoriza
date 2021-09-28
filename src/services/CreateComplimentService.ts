import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentsRequest{
    tag_id:string;
    user_sender:string;
    user_receiver:string;
    message:string;
}
class CreateComplimentService{
    async execute({tag_id,message,user_receiver,user_sender}:IComplimentsRequest){
        const complimentsRepository = getCustomRepository(ComplimentsRepositories);
        const usersRepository = getCustomRepository(UsersRepositories);

        //Verificando se usuários não são iguais
        if(user_receiver === user_sender){
            throw new Error("Não é possivel cadastrar para si mesmo um elogio!")
        }

        //Como estou buscando ID podemos passar o user_receiver diretamente abaixo
        const userReceiverExists =  await usersRepository.findOne(user_receiver);

        if(!userReceiverExists){
            throw new Error("Usuário que recebe não esta cadastrado!");
        }
        //criando elogio    
        const compliment = complimentsRepository.create({
            tag_id, user_receiver, user_sender, message
        })

        await complimentsRepository.save(compliment);

        return compliment;

    }
}

export {CreateComplimentService}