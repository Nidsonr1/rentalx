import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../useCase/category/createCategory';
import { listCategoryController } from '../useCase/category/listCategory';
import { importCategoriesController } from '../useCase/category/importCategories';

const categoriesRoute = Router();
const upload = multer({dest: './temp'});

categoriesRoute.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoute.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});

categoriesRoute.post('/importCSV', upload.single("file"), (request, response) => {
  return importCategoriesController.handle(request, response);
});

export { categoriesRoute }