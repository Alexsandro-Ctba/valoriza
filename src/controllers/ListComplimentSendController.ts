import { Request, Response } from "express"
import { ListComplimentServiceSend } from "../services/ListComplimentServiceSend";

class ListComplimentSendController{
    async handle(request:Request, response:Response){
        const { user_id } = request;

        const listComplimentSendService = new ListComplimentServiceSend();

        const compliments = await listComplimentSendService.execute(user_id);


        return response.json(compliments);

    }
}
export{ListComplimentSendController}