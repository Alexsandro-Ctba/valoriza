import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub:string;
}
export function ensureAthenticated(
    request:Request, 
    response:Response, 
    next:NextFunction){
    //receber o token    
    const authToken = request.headers.authorization;
    //verificar se o token esta preenchido
    if(authToken == undefined){
        return response.status(401).json({Message:"Você não esta logado, verifique e tente novamente."})
    }
    const [,token] = authToken.split(" ");
     
    if(!token){
        return response.status(401).json({Error: "Não foi possivel localizar o Token de acesso!"});
    }    

    //verificar se o token é valido 
   try {
    const { sub } = verify(token, "534b44a19bf18d20b71ecc4eb77c572f") as IPayload;  
    //recuperar informações do usuario
      request.user_id = sub;
    return next();
   } catch (error) {
       return response.status(401).json({Error:"Token invalido!"});
   }


}