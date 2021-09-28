import { Request, Response } from "express";
import { AutenticateUserService } from "../services/AutenticateUserService";
 
class AutenticateUserController{
    async handle(request:Request, response:Response){
        const { email, password } = request.body;

        const athenticateUserService = new AutenticateUserService();         
        
        const token = await athenticateUserService.execute({
            email, password
        })
console.log(token);
        return response.json(token);
    }
}

export { AutenticateUserController }