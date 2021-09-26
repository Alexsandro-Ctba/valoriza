
import { Router } from "express";
import { CreateUserController } from "./src/controllers/CreateUserController";

const router = Router();

//instanciando controller
const createUserController = new CreateUserController(); 
 
//passando para o controller informações da rota
router.post("/post", createUserController.handle)

export { router };