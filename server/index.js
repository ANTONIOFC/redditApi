import app from './app';

app.listen(process.env.PORT || 3000, () => {
    console.log('Programa rodando na porta 3000 ...');
});