import app from './app';

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Programa rodando na porta 3000 ...');
});