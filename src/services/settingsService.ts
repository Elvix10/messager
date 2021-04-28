import { getCustomRepository } from "typeorm"
import { SettingRepositories } from "../repositories/settingRepositorie"


interface ISettingsCreate{

    chat:boolean;
    username:string;
}


export class SettingsService{

    async create({chat,username}:ISettingsCreate){


        const settingRepository=getCustomRepository(SettingRepositories)
        
        const userAlreadyExists= await settingRepository.findOne({
            username
        })

        if(userAlreadyExists){
            throw new Error("user already exists")
        }
        const settings=settingRepository.create({
            chat,
            username,
        })
        await settingRepository.save(settings)

        return settings;    

}}