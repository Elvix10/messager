import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/messages";
import { MessageRepository } from "../repositories/messagesRepository";


interface IMessage {
    admin_id?:string
    text:string
    user_id:string
}


export class MessageService {

    private messageRepository: Repository<Message>

    constructor(){
        this.messageRepository=getCustomRepository(MessageRepository)
    }

    async create({admin_id, text, user_id}:IMessage){
      

     const message= this.messageRepository.create({
        admin_id,
        text,
        user_id
      })

      await this.messageRepository.save(message)

      return message
    }

    async listByUser(user_id:string){
       
        
        const listMessages= await this.messageRepository.find({
            user_id
        })

        return listMessages
    }
}