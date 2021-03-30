import { CategorieRepository } from "../../repository/CategorieRepository"
import { CreateCategoryController } from "./createCategoryController";
import { CreateCategoryUseCaser } from "./CreateCategoryUseCaser"


const categorieRepository = new CategorieRepository();

const createCategoryUseCase = new CreateCategoryUseCaser(categorieRepository);

const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController }