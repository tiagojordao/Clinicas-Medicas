import { Router } from 'express';

import UserController from './app/controllers/UserController';
import DoctorController from './app/controllers/DoctorController';

const routes = new Router();

routes.get('/medico', DoctorController.index);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

export default routes;
