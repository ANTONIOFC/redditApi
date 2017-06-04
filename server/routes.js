import express from 'express';

// controllers imports
import basicController from './controllers/basicController';
import usuarioController from './controllers/usuarioController';
import postController from './controllers/postController';
import comentarioController from'./controllers/comentarioController'

const routes = express();

// basic routes
routes.get('/', basicController.get);

// usuario routes
routes.post('/signup', usuarioController.post);
routes.put('/usuarios/:id', usuarioController.put);
routes.get('/usuarios', usuarioController.getAll);
routes.get('/usuarios/:id', usuarioController.getById);
routes.post('/logar', usuarioController.logar);
//routes.get('/auth/:logon', usuarioController.getByLogon);

// Post routes
routes.post('/materias', postController.post);
routes.put('/materias/:id', postController.put);
routes.get('/materias', postController.getAll);
routes.get('/materias/:id', postController.getById);

// comentário routes
routes.post('/comentarios', comentarioController.post);

export default routes;
