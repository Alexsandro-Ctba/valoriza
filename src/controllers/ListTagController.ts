import { Request, Response} from "express";
import { ListTagServices } from "../services/ListTagServices";

class ListTagController{
    async handle(request:Request, response:Response){
        const tags = new ListTagServices();

        const listTag = await tags.execute()

        return response.json(listTag);
    }
}

export{ListTagController}