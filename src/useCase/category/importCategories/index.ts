import { CategoryRepository } from "../../../repositories/implementations/CategoryRepository";
import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

const categoryRepository = CategoryRepository.getInstance();
const importCategoriesUseCase = new ImportCategoriesUseCase(categoryRepository);
const importCategoriesController = new ImportCategoriesController(importCategoriesUseCase);

export { importCategoriesController }