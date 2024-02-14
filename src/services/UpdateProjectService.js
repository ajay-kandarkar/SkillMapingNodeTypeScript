"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectById = void 0;
const dbconnection_1 = __importDefault(require("../Config/dbconnection"));
const updateProjectById = async (userId, updatedData) => {
    try {
        const connection = await dbconnection_1.default.getConnection();
        await connection.query('UPDATE Projects SET ? WHERE id = ?', [updatedData, userId]);
        connection.release();
    }
    catch (error) {
        throw error;
    }
};
exports.updateProjectById = updateProjectById;
