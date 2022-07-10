import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Members } from "../entity/Members";

export class MembersController {

    private memberRepository = getRepository(Members);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.memberRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.memberRepository.findOne({where: {id: parseInt(request.params.id, 10)}});
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.memberRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.memberRepository.findOne({where: {id: parseInt(request.params.id, 10)}});
        await this.memberRepository.remove(userToRemove);
    }
}