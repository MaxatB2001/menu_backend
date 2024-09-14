import { Request, Response } from "express";
import { MenuItem } from "../entity/MenuItem.entity";
import { AppDataSource } from "../ormconfig";
import { In } from "typeorm";

export class MenuController {
    static async getMenuItems(req: Request, res: Response) {
        const repo = AppDataSource.getRepository(MenuItem)
        const menuItems = await repo.find({relations: {extraOptions: true}})
        return res.json(menuItems)
    }

    static async createMenuItem(req: Request, res: Response) {
        const repo = AppDataSource.getRepository(MenuItem)
        const menuItem = await repo.save(req.body)
        res.status(200).json(menuItem)
    }

    static async updateMenuItem(req: Request, res: Response) {
        const repo = AppDataSource.getRepository(MenuItem)

    }

    static async addExtraOptionsMenuItem(req: Request, res: Response) {
        const repo = AppDataSource.getRepository(MenuItem)
        
        const {uid} = req.params
        const {childIds} = req.body

        const menuItem = await repo.findOne({where: {uid}, relations: {extraOptions: true}})

        const menuItems = await repo.find({where: {uid: In(childIds)}})

        if (!menuItems.length) {
            throw new Error('No child categories found with the provided IDs');
          }

        menuItem.extraOptions = [...menuItem.extraOptions, ... menuItems]
        await menuItem.save()
        return res.status(200).json(menuItem)
    }
}