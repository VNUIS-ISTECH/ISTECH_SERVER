import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Leaders } from "../entity/Leaders";

export class LeadersController {

    private leaderRepository = getRepository(Leaders);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.leaderRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.leaderRepository.findOne({where: {leadAccount: request.params.id}});
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.leaderRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.leaderRepository.findOne({where: {leadAccount: request.params.id}});
        await this.leaderRepository.remove(userToRemove);
    }
}