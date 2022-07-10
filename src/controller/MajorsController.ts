import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Majors } from "../entity/Majors";

export class MajorsController {

    private majorRepository = getRepository(Majors);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.majorRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.majorRepository.findOne({where: {majorCode: request.params.id}});
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.majorRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.majorRepository.findOne({where: {majorCode: request.params.id}});
        await this.majorRepository.remove(userToRemove);
    }
}