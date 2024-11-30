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
Router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const findUser = yield prisma.user.findUnique({
            where: {
                id: id
            }
        });
        if (!findUser) {
            res.status(404).json("Usuário não encontrado");
            return;
        }
        const userDelete = yield prisma.user.delete({
            where: {
                id: findUser === null || findUser === void 0 ? void 0 : findUser.id
            }
        });
        res.status(200).json({ message: "Usuário deletado", userDelete });
    }
    catch (err) {
        res.status(500).json({ message: "Erro ao deletar usuário", err });
    }
}));
exports.default = Router;
