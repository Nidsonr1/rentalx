import { Specification } from "../../model/Specification";
import { ICreateSpecification, ISpecificationRespository } from "../ISpecificationRepository";



class SpecificationRepository implements ISpecificationRespository {
  private specifications: Specification[];

  private static INSTANCE: SpecificationRepository;

  constructor() {
    this.specifications = [];
  }

  public static getInstance() {
    if(!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }

    return SpecificationRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecification): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description
    });

    this.specifications.push(specification);
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find((specification) => specification.name === name);
    return specification;
  }

}

export { SpecificationRepository }