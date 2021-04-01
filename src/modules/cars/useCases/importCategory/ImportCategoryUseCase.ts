import fs from "fs";
import csvParser  from "csv-parse";
import { IcategoryRpository } from "../createCategory/CreateCategoryUseCaser";
import e from "express";

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {

    constructor( private categorieRepository : IcategoryRpository){}

    loadCategory( file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject ) =>{
            const strean = fs.createReadStream(file.path);
            const categories: IImportCategory[] = [];
            const parseFile = csvParser();
    
            strean.pipe(parseFile)
    
            parseFile.on("data", async (line) => {
                const [ name, description ] = line;
    
                categories.push({
                    name,
                    description,
                });
                
            }).on("end", ()=>{
                resolve(categories)
            }).on("error", (error) => {
                reject( error)
            });
        })
    };

   async execute( file: Express.Multer.File): Promise<void>{
        const category = await this.loadCategory(file)

        category.map( async ( category ) =>{
            const { name , description } = category;

            const existsCategory = this.categorieRepository.findByName(name);

            if ( !existsCategory){
                this.categorieRepository.create({
                    name,
                    description,
                })
            }
        })
        
    }
}

export { ImportCategoryUseCase };