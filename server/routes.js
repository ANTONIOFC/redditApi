import express from 'express';

// controllers imports
import basicController from './controllers/basicController';
import usuarioController from './controllers/usuarioController';
import postController from './controllers/postController';

const routes = express();

// basic routes
routes.get('/', basicController.get);

// usuario routes
routes.post('/signup', usuarioController.post);

// Post routes
routes.post('/post', postController.post);
routes.get('/posts', postController.getAll);

export default routes;