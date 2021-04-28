import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../entities/settings";

@EntityRepository(Setting)
export class SettingRepositories extends Repository<Setting > {

}