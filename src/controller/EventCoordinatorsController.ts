import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { EventCoordinators } from "../entity/EventCoordinators";

export class EventCoordinatorsController {

    private eventCoordinatorRepository = getRepository(EventCoordinators);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.eventCoordinatorRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.eventCoordinatorRepository.findOne({where: {eventId: parseInt(request.params.id, 10)}});
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.eventCoordinatorRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.eventCoordinatorRepository.findOne({where: {eventId: parseInt(request.params.id, 10)}});
        await this.eventCoordinatorRepository.remove(userToRemove);
    }
}