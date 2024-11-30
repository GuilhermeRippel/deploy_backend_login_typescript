import express from "express";
import cadastro from "./cadastro";
import deleteUser from './deleteUser';
import login from './login';
import listarUsuarios from "./listarUsuarios";

const RouterAplication = express.Router();

RouterAplication.use("/cadastro", cadastro);
RouterAplication.use("/listarUsuarios", listarUsuarios);
RouterAplication.use("/deletarUsuario", deleteUser);
RouterAplication.use("/login", login);

export default RouterAplication;