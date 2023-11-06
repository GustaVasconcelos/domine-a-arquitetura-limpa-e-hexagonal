import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import RegistrarUsuario from './core/usuario/service/registrarUsuario';
import RepositorioUsuarioPg from './external/db/repositorioUsuarioPg';
import SenhaCripto from './external/auth/senhaCripto';
import RegistrarUsuarioController from './external/api/RegistrarUsuarioController';
import LoginUsuario from './core/usuario/service/loginUsuario';
import LoginUsuarioController from './external/api/loginUsuarioController';
import ObterProdutoPorId from './core/produto/service/obterProdutoPorId';
import ObterProdutoPorIdController from './external/api/obterProdutoPorIdController';
import usuarioMiddleware from './external/api/usuarioMiddleware';

const app = express();
const porta = process.env.API_PORT ?? 4000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(porta, () => {
    console.log('Servidor executando na porta: ' + porta)
});

// ------------------ Rotas abertas
const repositorioUsuario = new RepositorioUsuarioPg();
const provedorCripto = new SenhaCripto();
const registrarUsuario = new RegistrarUsuario(
    provedorCripto,
    repositorioUsuario
);

const loginUsuario = new LoginUsuario(
    repositorioUsuario,
    provedorCripto,
)

new RegistrarUsuarioController(app, registrarUsuario);
new LoginUsuarioController(app, loginUsuario);

// ------------------ Rotas protegidas
const usuarioMid = usuarioMiddleware(repositorioUsuario);
const obterProdutoPorId = new ObterProdutoPorId();

new ObterProdutoPorIdController(app, obterProdutoPorId, usuarioMid);

