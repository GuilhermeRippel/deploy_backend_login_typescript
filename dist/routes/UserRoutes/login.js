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
const bcrypt_1 = __importDefault(require("bcrypt"));
const loginRouter = express_1.default.Router();
const prisma = new client_1.PrismaClient();
loginRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const findUser = yield prisma.user.findUnique({
            where: { email: email },
        });
        if (!findUser) {
            res.status(401).json({ message: "Credenciais incorretas" });
            return;
        }
        const isPasswordValid = yield bcrypt_1.default.compare(password, findUser.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: "Credenciais incorretas" });
            return;
        }
        res.status(200).json({ message: "Usuário encontrado, bem-vindo!" });
    }
    catch (err) {
        res.status(500).json({ message: "Não foi possível logar", error: err });
    }
}));
exports.default = loginRouter;
