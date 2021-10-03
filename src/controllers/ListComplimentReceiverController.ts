import  { Request, Response} from "express";
import { ListComplimentServiceReceiver } from "../services/ListComplimentServiceReceiver";

class ListComplimentReceiverController{
    async handle(request:Request, response:Response){
        const { user_id } = request;
        const listComplimentServiceReceiver = new ListComplimentServiceReceiver();

        const compliments = await listComplimentServiceReceiver.execute(user_id)

        return response.json(compliments);
    }
}
export{ListComplimentReceiverController}