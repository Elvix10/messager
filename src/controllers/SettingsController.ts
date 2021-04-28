import {Request, Response} from 'express'
import { getCustomRepository } from 'typeorm'
import { SettingRepositories } from '../repositories/settingRepositorie'



export class SettingsController {
    
    async create(req:Request, res:Response){

        const {chat, username}=req.body

        const SettingRepository=getCustomRepository(SettingRepositories)
    
        const settings=SettingRepository.create({
            chat,
            username
        })
        await SettingRepository.save(settings)
    
        return res.json(settings)

    }
}