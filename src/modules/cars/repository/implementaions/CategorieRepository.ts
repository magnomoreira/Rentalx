import { getRepository, Repository } from 'typeorm';
import { Category } from '../../entities/Category';
import { IcategoryRpository, IcreateRepositDto } from '../IcategoryRepository';



class CategorieRepository implements IcategoryRpository {
    private repository: Repository<Category>

    private static INSTANCE: CategorieRepository;

    private constructor(){
        this.repository = getRepository(Category);
    }

    public static getInstance(): CategorieRepository {
        if (!CategorieRepository.INSTANCE){
            CategorieRepository.INSTANCE = new CategorieRepository();
        }
        return CategorieRepository.INSTANCE;
    }

    async create( { name, description}: IcreateRepositDto): Promise<void> {

        const category = this.repository.create({
            description,
            name,
        });

        await this.repository.save(category);
    
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }

   async findByName( name : string): Promise<Category> {
       const category = await this.repository.findOne({name})
        return category;
    }
}

export { CategorieRepository };