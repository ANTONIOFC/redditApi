import express from 'express';

// controllers imports
import basicController from './controllers/basicController';
import usuarioController from './controllers/usuarioController';

const routes = express();

// basic routes
routes.get('/', basicController.get);

// usuario routes
routes.post('/signup', usuarioController.post);

export default routes;