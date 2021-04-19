import { Category } from "../../entities/Category";
import { IcategoryRpository } from "../createCategory/CreateCategoryUseCaser";



class ListCategoriesUseCase {
    constructor (private categorieRepository: IcategoryRpository ){}
    execute (): Category[]{
        const categories = this.categorieRepository.list();

        return categories;
    }

}

export {  ListCategoriesUseCase };