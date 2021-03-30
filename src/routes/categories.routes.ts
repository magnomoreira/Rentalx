import {  Router } from 'express';
import { CategorieRepository } from "../modules/cars/repository/CategorieRepository";
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRoutes = Router();
const categorieRepository  = new CategorieRepository()


categoriesRoutes.post("", ( request , response ) => {
     return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", ( request, response ) => {
    const all = categorieRepository.list();

    return response.json(all);
    
})

export { categoriesRoutes };