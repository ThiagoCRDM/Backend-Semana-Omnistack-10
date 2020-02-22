const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:root@cluster0-5bwzu.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

app.use(express.json());

app.use(routes);
//MÉTODOS HTTP: GET, POST, PUT, DELETE


//porta onde esta rodando a aplicação
app.listen(3333);