import { Category } from '../../model/Category';
import { IcreateRepositDto } from '../IcategoryRepository';

class CategorieRepository {

    private  categories: Category [];
    private static INSTANCE: CategorieRepository;

    private constructor(){

        this.categories = [];
    }

    public static getInstance(): CategorieRepository {
        if (!CategorieRepository.INSTANCE){
            CategorieRepository.INSTANCE = new CategorieRepository();
        }
        return CategorieRepository.INSTANCE;
    }

    create( { name, description}: IcreateRepositDto): void {

        const category = new Category()

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })
    
        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName( name : string): Category {
        const category = this.categories.find(category => category.name === name );
        return category;
    }
}

export { CategorieRepository };