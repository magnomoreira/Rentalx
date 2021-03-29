import { request, response, Router } from "express";
import { SpecificationRepository } from "../modules/cars/repository/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/service/CreateSpecificationService";

const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", ( request, response ) => {
    const { name, description } = request.body;
    const createSpecificationService = new CreateSpecificationService( specificationRepository);

    createSpecificationService.execute({ name, description });

    response.status(201).send();
})

export { specificationRoutes };