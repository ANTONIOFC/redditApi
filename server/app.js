import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import config  from './config';
import routes from './routes';

//console.log(config);
//mongoose.connect(config.database); 

var mongoUri = process.env.MONGODB_URI || config.database;

mongoose.connect(mongoUri, () => {
    console.log('Conectado ao MongoDB...');
});

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index');
})

// Middleware
app.use(bodyParser.json());

app.use('/api', routes);

export default app;
