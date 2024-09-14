import { Request, Response } from "express";
import { AppDataSource } from "../ormconfig";
import { Category } from "../entity/Category.entity";
import { IsNull } from "typeorm";

export class CategoryController {
    static async create(req: Request, res: Response) {
        const repo = AppDataSource.getRepository(Category)
        const category = await repo.save(req.body)
        return res.json(category)
    }

    static async get(req: Request, res: Response) {
        const repo = AppDataSource.getRepository(Category)
        const category = await repo.find({relations: {subCategories: true}, where: {parent: IsNull()}})
        return res.json(category)
    }
}