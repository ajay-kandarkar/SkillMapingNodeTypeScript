"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCountry = void 0;
const dbconnection_1 = __importDefault(require("../Config/dbconnection"));
const getAllCountry = async () => {
    try {
        const result = await dbconnection_1.default.query('SELECT * FROM  country');
        return result;
    }
    catch (error) {
        console.error(error);
        return error;
    }
};
exports.getAllCountry = getAllCountry;
