"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClient = void 0;
const dbconnection_1 = __importDefault(require("../Config/dbconnection"));
const deleteClient = async (userId) => {
    try {
        await dbconnection_1.default.query('Delete  FROM client WHERE id = ?', [userId]);
    }
    catch (error) {
        throw error;
    }
};
exports.deleteClient = deleteClient;
