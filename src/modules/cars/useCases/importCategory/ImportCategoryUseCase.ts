import fs from "fs";
import csvParser  from "csv-parse";
import { IcategoryRpository } from "../createCategory/CreateCategoryUseCaser";

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {

    constructor( private categorieRepository : IcategoryRpository){}

    loadCategory( file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject ) =>{
            const strean = fs.createReadStream(file.path);

            const category: IImportCategory[] = []
    
            const parseFile = csvParser();
    
            strean.pipe(parseFile)
    
            parseFile.on("data", async (line) => {
                const [ name, description ] = line;
    
                category.push({
                    name,
                    description,
                });
                
            }).on("end", ()=>{
                console.log(category)
            }).on("error", (error) => {
                reject( error)
            });
        })
    };

   async execute( file: Express.Multer.File): Promise<void>{

        const category = await this.loadCategory(file)
        
    }
}

export { ImportCategoryUseCase };