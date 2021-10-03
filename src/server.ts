import   "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
//import cors from "cors";
import "express-async-errors";
import cors from "cors";
import { router } from "../routes";
import "./database";

const app = express();
app.use(cors());

//habilita para utilização de json, sempre deve vir antes do router
app.use(express.json());
//inseri as rotas dentro do express 
app.use(router);

app.use((err:Error, request:Request, response:Response, next: NextFunction)=>{
        if(err instanceof Error){
            return response.status(400).json({Error:err.message})
        }

        return response.status(500).json({
            status:"Error",
            message:"Erro interno no Servidor"
        })
})
app.listen(3000, ()=>{
    console.log('Server is running');
})

