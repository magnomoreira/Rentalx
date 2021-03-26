import { Category } from '../model/Category';
import { IcategoryRpository, IcreateRepositDto } from "./IcategoryRepository";


class PostgresCategoryRepository implements IcategoryRpository {
    findBayName(name: string): Category {
        console.log(name)
        return null;
    }

    list(): Category[]{
        
        return null
    }
    create( {name , description }: IcreateRepositDto ): void {
    console.log(name,description);
    }
    
}

export { PostgresCategoryRepository };