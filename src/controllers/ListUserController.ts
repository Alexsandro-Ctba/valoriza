import { Request, Response} from "express"
import { ListUserService } from "../services/ListUserService";

class ListUserController{
    async handle(request:Request,response:Response){
        const { user_id } = request;

        const users = new ListUserService();

        const listuser = await users.execute(user_id);

        return response.json(listuser);
    }
}

export{ListUserController}