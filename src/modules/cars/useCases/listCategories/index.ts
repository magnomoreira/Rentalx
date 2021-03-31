import { CategorieRepository } from "../../repository/CategorieRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";


const categorieRepository = new CategorieRepository()
const listCategoriesUseCase = new ListCategoriesUseCase(categorieRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesController };