import { Category } from "../model/Category";

interface ICreateCategory {
  name: string;
  description: string;
}


interface ICategoryRepository {
  create({name, description}: ICreateCategory): void;
  list(): Category[];
  findByName(name: string): Category;
}

export { ICategoryRepository, ICreateCategory }