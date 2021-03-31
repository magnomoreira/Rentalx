import { CategorieRepository } from "../../repository/implementaions/CategorieRepository"
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCaser } from "./CreateCategoryUseCaser";


const categorieRepository = CategorieRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCaser(categorieRepository);

const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController , createCategoryUseCase }