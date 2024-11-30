"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cadastro_1 = __importDefault(require("./cadastro"));
const deleteUser_1 = __importDefault(require("./deleteUser"));
const login_1 = __importDefault(require("./login"));
const listarUsuarios_1 = __importDefault(require("./listarUsuarios"));
const RouterAplication = express_1.default.Router();
RouterAplication.use("/cadastro", cadastro_1.default);
RouterAplication.use("/listarUsuarios", listarUsuarios_1.default);
RouterAplication.use("/deletarUsuario", deleteUser_1.default);
RouterAplication.use("/login", login_1.default);
exports.default = RouterAplication;
