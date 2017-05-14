import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import config  from './config';
import routes from './routes';

console.log(config);
//mongoose.connect(config.database); 

mongoose.connect(config.database, () => {
    console.log('Conectado ao MongoDB...');
});

const app = express();

// Middleware
app.use(bodyParser.json());

app.use('/api', routes);

export default app;
