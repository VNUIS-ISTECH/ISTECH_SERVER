import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Skills } from "../entity/Skills";

export class SkillsController {

    private skillRepository = getRepository(Skills);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.skillRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.skillRepository.findOne({where: {id: parseInt(request.params.id, 10)}});
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.skillRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.skillRepository.findOne({where: {id: parseInt(request.params.id, 10)}});
        await this.skillRepository.remove(userToRemove);
    }
}