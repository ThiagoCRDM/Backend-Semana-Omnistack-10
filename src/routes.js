
const { Router } = require('express');
const routes = Router();


const DevController = require('./controllers/dev_controller');
const SearchController = require('./controllers/search_controller');
/*
TIPOS DE PARAMETOS: 
QUERY PARAMS: request.qury (filtros, ordenação, paginação)
ROUTE PARAMS: request.params (Indentificar um recurso na alteração, remoção)
BODY: request.body(Dados para criação ou alteração)
*/

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;