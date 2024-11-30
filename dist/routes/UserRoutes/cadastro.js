"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const Router = express_1.default.Router();
const prisma = new client_1.PrismaClient();
//Cadastro
Router.post("/cadastro", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    try {
        const response = yield prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
            }
        });
        res.status(201).json({ message: "Usuário criado com sucesso!", response });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Algo deu eerrado", err });
    }
}));
exports.default = Router;
