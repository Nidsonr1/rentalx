import { Specification } from "../model/Specification";

interface ICreateSpecification {
  name: string;
  description: string;
}


interface ISpecificationRepository {
  create({name, description}: ICreateSpecification): void
  list(): Specification[];
  findByName(name: string): Specification;
}

export { ICreateSpecification, ISpecificationRepository }