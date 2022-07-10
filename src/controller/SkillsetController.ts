import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Skillset } from "../entity/Skillset";

export class SkillsetController {

    private skillsetRepository = getRepository(Skillset);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.skillsetRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.skillsetRepository.findOne({where: {id: parseInt(request.params.id, 10)}});
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.skillsetRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.skillsetRepository.findOne({where: {id: parseInt(request.params.id, 10)}});
        await this.skillsetRepository.remove(userToRemove);
    }
}