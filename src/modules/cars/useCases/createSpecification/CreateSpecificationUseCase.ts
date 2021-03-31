import { IspecificationRepository } from "../../repository/IspecificationRepository";

interface Irequest {
    name: string ;
    description: string;
}

class CreateSpecificationUseCase{
    constructor( private specificationRepository : IspecificationRepository){}
    
    execute({ name , description }: Irequest): void{
        const specificationAlreadExists = this.specificationRepository.findByName(name);

        if ( specificationAlreadExists ){
            throw new Error("Specification alread exists");
            
        }

        this.specificationRepository.create({
            name,
            description,

        });
    }
}

export { CreateSpecificationUseCase };