import { Router } from 'express'

import { categoriesRoute } from './categories.routes';
import { specificationRoute } from './specification.routes'

const route = Router();

route.use('/categories', categoriesRoute);
route.use('/specifications', specificationRoute);

export { route }

