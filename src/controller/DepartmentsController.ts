import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Departments } from "../entity/Departments";

export class DepartmentsController {

    private deparmentRepository = getRepository(Departments);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.deparmentRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.deparmentRepository.findOne({where: {id: parseInt(request.params.id, 10)}});
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.deparmentRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.deparmentRepository.findOne({where: {id: parseInt(request.params.id, 10)}});
        await this.deparmentRepository.remove(userToRemove);
    }
}