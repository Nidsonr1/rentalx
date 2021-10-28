import { Category } from '../../model/Category'
import { ICategoryRepository, ICreateCategory } from '../ICategoryRepository';


class CategoryRepository implements ICategoryRepository{
  private categories: Category[];

  private static INSTANCE: CategoryRepository;  

  private constructor(){
    this.categories = [];
  };

  public static getInstance() {
    if(!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository();
    }
    return CategoryRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategory): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description
    });

    this.categories.push(category);
  }
  list(): Category[] {
    return this.categories;
  }
  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
  
}

export { CategoryRepository }