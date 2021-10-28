import { ICategoryRepository } from '../../../repositories/ICategoryRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute({name, description}: IRequest) {
    const categoryAlreadyExist = this.categoryRepository.findByName(name);

    if(categoryAlreadyExist) {
      throw new Error("Category already Exists!");
    }

    this.categoryRepository.create({name, description});
  }
}

export { CreateCategoryUseCase }