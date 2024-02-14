"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClientbyId = void 0;
const dbconnection_1 = __importDefault(require("../Config/dbconnection"));
const deleteClientbyId = async (userId) => {
    try {
        await dbconnection_1.default.query('Delete  FROM projects WHERE id = ?', [userId]);
    }
    catch (error) {
        throw error;
    }
};
exports.deleteClientbyId = deleteClientbyId;
