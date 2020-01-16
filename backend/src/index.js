const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://brunomilani:bruno17071996@cluster0-8oinq.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());

app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parametro:

//Query Params: request.query(Filtros, ordenaraçao, paginaçao, ...)
//Route Params: request.params (Identificar um recurso na alteracao ou remocao)
//Body: request.body (Dados para criacao ou alteracao de um registro)

// MongoDB (Nao-Relacional)


app.listen(3333); //porta
