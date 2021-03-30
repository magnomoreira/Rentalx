import { IcategoryRpository } from "../../repository/IcategoryRepository";

interface IRequest{
    name: string;
    description : string
}

class CreateCategoryUseCaser {

    constructor (private categoriesrepository: IcategoryRpository){}

    execute({ name , description }: IRequest ) : void {
        const categorieAlreadExists = this.categoriesrepository.findBayName(name);

        if (categorieAlreadExists){
           throw new Error("Category alread exists"); 
        }

        this.categoriesrepository.create({name, description});
    }
    
 }
export { CreateCategoryUseCaser, IcategoryRpository };