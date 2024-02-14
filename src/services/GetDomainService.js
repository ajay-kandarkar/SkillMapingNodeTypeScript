"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDomain = void 0;
const dbconnection_1 = __importDefault(require("../Config/dbconnection"));
const getDomain = async () => {
    try {
        const result = await dbconnection_1.default.query('SELECT * FROM  domain');
        return result;
    }
    catch (error) {
        console.error(error);
        return error;
    }
};
exports.getDomain = getDomain;
