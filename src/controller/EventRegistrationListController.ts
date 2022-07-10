import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { EventRegistrationList } from "../entity/EventRegistrationList";

export class EventRegistrationListController {

    private eventRegistrationRepository = getRepository(EventRegistrationList);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.eventRegistrationRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.eventRegistrationRepository.findOne({where: {id: parseInt(request.params.id, 10)}});
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.eventRegistrationRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.eventRegistrationRepository.findOne({where: {id: parseInt(request.params.id, 10)}});
        await this.eventRegistrationRepository.remove(userToRemove);
    }
}