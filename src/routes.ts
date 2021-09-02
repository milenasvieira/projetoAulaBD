import { Router } from 'express';
import cadastroController from './controller/cadastroController';
import { ClienteController } from './controller/clienteController';


const routes = Router();

routes.post('/cadastros', cadastroController.create);
routes.put('/cadastros/:id', cadastroController.update);
routes.get('/cadastros', cadastroController.list);
routes.get('/cadastros/:id', cadastroController.find);
routes.delete('/cadastros/:id', cadastroController.delete);

const clienteController = new ClienteController;
routes.post('/clientes', clienteController.create);

export default routes;