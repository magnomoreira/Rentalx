
import { Category } from "../entities/Category";

interface IcreateRepositDto {
    name : string;
    description: string;
}

interface IcategoryRpository {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({name, description}: IcreateRepositDto):Promise<void>;

}

export { IcategoryRpository, IcreateRepositDto};