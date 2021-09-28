import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { sign } from "jsonwebtoken";
import {compare} from "bcryptjs";

interface IUAthenticateRequest {
    email: string;
    password:string;
  }


class AutenticateUserService{
    async execute({ email, password }:IUAthenticateRequest){
        
        //Instanciando Classe
        const usersRepository = getCustomRepository(UsersRepositories);
        //Buscando info
        const user = await usersRepository.findOne({ email })
        //verificando Info
        if(!user){
            throw new Error("Email/Senha Incorreta")
        }

        //validando retorno boleano
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("Email/Senha incorreta");
        }

        //gerando token
        const token = sign({
            //email
            email: user.email
            //chave secreta  gerado com MD5
        },"534b44a19bf18d20b71ecc4eb77c572f",{
            // qual info queremos passar
            subject: user.id,
            //tempo de expiração do token
            expiresIn:"1d"
        }
        )
        
        return token;

    }
}


export {AutenticateUserService}