import { Specification } from "../../model/Specification";
import { IcreateRepositDto } from "../IcategoryRepository";
import { IspecificationRepository } from "../IspecificationRepository";

class SpecificationRepository implements IspecificationRepository {
    private specification : Specification[];

    constructor(){
        this.specification = [];
    }

    create( { name , description }: IcreateRepositDto ):void{
        const specification = new Specification();

        Object.assign( specification, {
            name,
            description,
            created_at: new Date(),
        });
        this.specification.push( specification );
    }

    findByName(name: string ): Specification {
        const specification = this.specification.find
        (specification => specification.name === name);

        return specification
    }


}

export { SpecificationRepository };