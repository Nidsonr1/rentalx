import { ISpecificationRepository } from "../../../repositories//ISpecificationRepository";



class ListSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute() {
    const specifications = this.specificationRepository.list();

    return specifications;
  }
}

export { ListSpecificationUseCase }