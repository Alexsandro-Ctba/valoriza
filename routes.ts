
import { Router } from "express";
import { CreateUserController } from "./src/controllers/CreateUserController";
import { CreateTagController } from "./src/controllers/CreateTagController";
import { ensureAdmin } from "./src/middlewares/ensureAdmin";
import { AutenticateUserController } from "./src/controllers/AutenticateUserController";
import { CreateComplimentController } from "./src/controllers/CreateComplimentController";
 
const router = Router();

//instanciando controller
const createUserController = new CreateUserController(); 
const createTagController = new CreateTagController();
const authenticateUserController = new AutenticateUserController();
const CreatecomplimentController = new CreateComplimentController();
//passando para o controller informações da rota
router.post("/users",  createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", CreatecomplimentController.handle);
export { router };