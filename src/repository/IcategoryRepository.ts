
import { Category } from "../model/Category";

interface IcreateRepositDto {
    name : string;
    description: string;
}

interface IcategoryRpository {
    findBayName(name: string): Category;
    list(): Category[];
    create({name, description}: IcreateRepositDto):void;

}

export { IcategoryRpository, IcreateRepositDto};