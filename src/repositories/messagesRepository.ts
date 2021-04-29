import { EntityRepository, Repository } from "typeorm";
import { Message } from "../entities/messages";


@EntityRepository(Message)
export class MessageRepository extends Repository<Message>{

}