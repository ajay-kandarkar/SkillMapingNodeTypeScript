"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueToken = void 0;
const crypto_1 = __importDefault(require("crypto"));
const generateUniqueToken = () => {
    const tokenLength = 32;
    return crypto_1.default.randomBytes(tokenLength).toString('hex');
};
exports.generateUniqueToken = generateUniqueToken;
