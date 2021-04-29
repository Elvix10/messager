import { Request ,response,Response} from "express";
import { MessageService } from "../services/messageService";



export class MessagesController{

    async create(req:Request,res:Response){

        const {admin_id,text,user_id}=req.body
        const messageService=new MessageService();

        const message= await messageService.create({
            admin_id,
            text,
            user_id
        })

        return response.json(message)
    }

    async showByUser(req:Request,res:Response){
        const {id}= req.params
        const messageService=new MessageService();

        const listMessages= await messageService.listByUser(id)
        
        return listMessages
    }
}