import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";
interface IUserRequest {
    nome: string;
    email: string;
    admin?: boolean;
    password:string;
  }
  

class CreateUserService{
    async execute({ nome, email, password, admin =false }:IUserRequest){  
        //iniciando usersRepositories e suas extensões      
        const usersRepository = getCustomRepository(UsersRepositories);
        
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

        //criptografar senha
        const passwordHash = await hash(password, 8)
        //criando objeto user para inserção no BD
        const user = usersRepository.create({            
            nome, email, password: passwordHash, admin
        })
       
        //salvando usuario no banco
        await usersRepository.save(user);
        //retornando o usuario cadastrado     
       
        return user;
    }
}

export { CreateUserService };