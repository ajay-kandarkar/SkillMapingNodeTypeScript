"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLoginUserServiceById = void 0;
const dbconnection_1 = __importDefault(require("../Config/dbconnection"));
const GetLoginUserServiceById = async (userId) => {
    try {
        const [result] = await dbconnection_1.default.query('SELECT * FROM UserRegistration WHERE id = ?', [userId]);
        if (result.length > 0) {
            const user = result[0];
            return user;
        }
        else {
            return null;
        }
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};
exports.GetLoginUserServiceById = GetLoginUserServiceById;
