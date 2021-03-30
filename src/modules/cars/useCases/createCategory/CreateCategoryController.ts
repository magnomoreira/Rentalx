import { Request, Response } from 'express';
import { CreateCategoryUseCaser } from './CreateCategoryUseCaser';



class CreateCategoryController {

    constructor (private createCategoryUseCase : CreateCategoryUseCaser ){}
    handle ( request: Request, response: Response){

        const { name , description } = request.body;

        this.createCategoryUseCase.execute({ name , description});

        return response.status(201).send();
    }
}

export { CreateCategoryController };