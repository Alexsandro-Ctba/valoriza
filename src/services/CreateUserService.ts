import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
    nome: string;
    email: string;
    admin?: boolean;
  }
  

class CreateUserService{
    async execute({ nome, email, admin =false }:IUserRequest){  
        //iniciando usersRepositories e suas extensões      
        const usersRepository = getCustomRepository(UsersRepositories);
        console.log("email", email);
        //buscando usuario na base de dados
        const userAlreadExist = await usersRepository.findOne({
            email
        });
        //verificando email
        if(!email){
            throw new Error('Email incorreto')
        }
        //verificando usuario
        if(userAlreadExist){
            throw new Error('Usuário já existe!')            
        }

        //criando objeto user para inserção no BD
        const user = usersRepository.create({            
            nome, email, admin
        })
       
        //salvando usuario no banco
        await usersRepository.save(user);
        //retornando o usuario cadastrado     
       
        return user;
    }
}

export { CreateUserService };