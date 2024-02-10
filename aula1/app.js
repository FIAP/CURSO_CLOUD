const express = require('express');
const app = express();
const port = 3000;

// Configuração do Express
app.set('view engine', 'ejs');

// Rotas
const mainController = require('./controllers/mainController');
app.use('/', mainController);

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
