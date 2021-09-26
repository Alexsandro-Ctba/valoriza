
import { Router } from "express";
import { CreateUserController } from "./src/controllers/CreateUserController";
import { CreateTagController } from "./src/controllers/CreateTagController";
import { ensureAdmin } from "./src/middlewares/ensureAdmin";
 
const router = Router();

//instanciando controller
const createUserController = new CreateUserController(); 
const createTagController = new CreateTagController(); 
//passando para o controller informações da rota
router.post("/users", ensureAdmin, createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);


export { router };