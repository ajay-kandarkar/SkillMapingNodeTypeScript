"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateJwtToken = (user) => {
    const secretKey = '12345678';
    const token = jsonwebtoken_1.default.sign({ user }, secretKey, { expiresIn: '1h' });
    return token;
};
