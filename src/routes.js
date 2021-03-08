import { Router } from 'express';

import UserController from './app/controllers/UserController';
import DoctorController from './app/controllers/DoctorController';

const routes = new Router();

routes.get('/users', DoctorController.index);
routes.post('/users', UserController.store);
routes.delete('/users/:id', UserController.delete);

export default routes;
