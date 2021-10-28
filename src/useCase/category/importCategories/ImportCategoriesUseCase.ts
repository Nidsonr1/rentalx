import fs from 'fs';
import csvParse from 'csv-parse';
import { CategoryRepository } from '../../../repositories/implementations/CategoryRepository';
import { ICreateCategory } from '../../../repositories/ICategoryRepository';


class ImportCategoriesUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  private loadCategory(file: Express.Multer.File): Promise<ICreateCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: ICreateCategory[] = [];

      const parseFile = csvParse();
      stream.pipe(parseFile);

      parseFile 
        .on("data", (line) => {
          const [ name, description ] = line;

          categories.push({
            name,
            description
          });
        }).on("end", () => {
          resolve(categories);
        }).on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategory(file);

    categories.map((category) => {
      const { name, description } = category;

      const categoryAlreadyExist = this.categoryRepository.findByName(name);

      if(!categoryAlreadyExist) {
        this.categoryRepository.create({ name, description });
      }
    })
  }
}

export { ImportCategoriesUseCase }