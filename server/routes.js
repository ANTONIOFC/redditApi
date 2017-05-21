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
routes.get('/usuarios', usuarioController.getAll);
routes.get('/usuarios/logar', usuarioController.getByEmail);


// Post routes
routes.post('/post', postController.post);
routes.get('/posts', postController.getAll);

// comentário routes
routes.post('/comentario', comentarioController.post);

export default routes;
