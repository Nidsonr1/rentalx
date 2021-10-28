import { response } from "express";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository"



class ListCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}
  execute() {
    const categories = this.categoryRepository.list();
    return categories;
  }
}

export { ListCategoryUseCase }