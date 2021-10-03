
import { Router } from "express";
import { CreateUserController } from "./src/controllers/CreateUserController";
import { CreateTagController } from "./src/controllers/CreateTagController";
import { ensureAdmin } from "./src/middlewares/ensureAdmin";
import { ensureAthenticated } from "./src/middlewares/ensureAthenticated";
import { AutenticateUserController } from "./src/controllers/AutenticateUserController";
import { CreateComplimentController } from "./src/controllers/CreateComplimentController";
import { ListComplimentReceiverController } from "./src/controllers/ListComplimentReceiverController";
import { ListComplimentSendController } from "./src/controllers/ListComplimentSendController";
import { ListTagController } from "./src/controllers/ListTagController";
import { ListUserController } from "./src/controllers/ListUserController";
 
const router = Router();

//instanciando controller
const createUserController = new CreateUserController(); 
const createTagController = new CreateTagController();
const authenticateUserController = new AutenticateUserController();
const CreatecomplimentController = new CreateComplimentController();
const listComplimentReceiver = new ListComplimentReceiverController();
const listComplimentSend = new ListComplimentSendController();
const listTags = new ListTagController();
const listUsers = new ListUserController();
//passando para o controller informações da rota
router.post("/users",  createUserController.handle);
router.post("/tags", ensureAthenticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments",ensureAthenticated, CreatecomplimentController.handle);
router.get("/Sendcompliments",ensureAthenticated, listComplimentSend.handle);
router.get("/Receivercompliments",ensureAthenticated, listComplimentReceiver.handle);
router.get("/tags",ensureAthenticated, listTags.handle);
router.get("/ListUsers",ensureAthenticated, listUsers.handle);
export { router };