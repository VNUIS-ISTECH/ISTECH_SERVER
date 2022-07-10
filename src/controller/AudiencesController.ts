import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Audiences } from "../entity/Audiences";

export class AudiencesController {

    private audienceRepository = getRepository(Audiences);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.audienceRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.audienceRepository.findOne({where: {id: parseInt(request.params.id, 10)}});
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.audienceRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.audienceRepository.findOne({where: {id: parseInt(request.params.id, 10)}});
        await this.audienceRepository.remove(userToRemove);
    }
}