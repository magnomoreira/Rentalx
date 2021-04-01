import { CategorieRepository } from "../../repository/implementaions/CategorieRepository";
import { ImportCategoryController } from "./importCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoryRepository = CategorieRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };