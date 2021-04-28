import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/users";



@EntityRepository(User)
export class UserRepository extends Repository<User>{}