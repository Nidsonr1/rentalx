import { Router } from 'express';

import { createSpecificationController } from '../useCase/specification/createSpecification';
import { listSpecificationController  } from '../useCase/specification/listSpecification';

const specificationRoute = Router();

specificationRoute.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationRoute.get('/', (request, response) => {
  return listSpecificationController.handle(request, response);
});

export { specificationRoute }