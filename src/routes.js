import { Router } from 'express';

import UserController from './app/controllers/UserController';
import DoctorController from './app/controllers/DoctorController';
import EmployeeController from './app/controllers/EmployeeController';
import PatientController from './app/controllers/PatientController';
import SessionController from './app/controllers/SessionController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';

import tokenMiddleware from './app/middlewares/token';

const routes = new Router();

routes.post('/user', UserController.store);
routes.post('/authenticate', SessionController.store);


routes.use(tokenMiddleware);


routes.get('/users', UserController.index);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.delete);

routes.get('/funcionarios', EmployeeController.index);
routes.get('/medicos', DoctorController.index);
routes.get('/pacientes', PatientController.index);

routes.post('/consulta', AppointmentController.store);
routes.get('/consultas', AppointmentController.index);
routes.put('/consultas/:id', AppointmentController.update);
routes.delete('/consultas/:id', AppointmentController.delete);

routes.get('/agenda/:docId', ScheduleController.index);




export default routes;
