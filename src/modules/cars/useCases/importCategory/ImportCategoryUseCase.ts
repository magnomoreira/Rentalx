import fs from "fs";
import csvParser  from "csv-parse";

class ImportCategoryUseCase {
    execute( file: Express.Multer.File){
        const strean = fs.createReadStream(file.path);

        const parseFile = csvParser();

        strean.pipe(parseFile)

        parseFile.on("data", async (line) => {
            console.log(line)
        })
    }
}

export { ImportCategoryUseCase };