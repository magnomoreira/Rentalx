
import { Category } from "../entities/Category";

interface IcreateRepositDto {
    name : string;
    description: string;
}

interface IcategoryRpository {
    findByName(name: string): Category;
    list(): Category[];
    create({name, description}: IcreateRepositDto):void;

}

export { IcategoryRpository, IcreateRepositDto};