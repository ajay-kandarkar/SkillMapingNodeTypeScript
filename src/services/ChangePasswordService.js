"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePassword = void 0;
const dbconnection_1 = __importDefault(require("../Config/dbconnection"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = 10;
const getUserByResetToken = async (token) => {
    try {
        const [result] = await dbconnection_1.default.query('SELECT * FROM UserRegistration WHERE reset_token = ? AND reset_token_expiry > NOW()', [token]);
        return result;
    }
    catch (error) {
        throw error;
    }
};
const changePassword = async (token, newPassword) => {
    try {
        const user = await getUserByResetToken(token);
        const salt = await bcrypt_1.default.genSalt(saltRounds);
        const newHashedPassword = await bcrypt_1.default.hash(newPassword, salt);
        if (user && user.length > 0) {
            const email = user[0].email;
            const updatePasswordQuery = 'UPDATE UserRegistration SET password = ? WHERE email = ?';
            await dbconnection_1.default.query(updatePasswordQuery, [newHashedPassword, email]);
            const clearResetTokenQuery = 'UPDATE UserRegistration SET reset_token = NULL, reset_token_expiry = NULL WHERE email = ?';
            await dbconnection_1.default.query(clearResetTokenQuery, [email]);
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        throw error;
    }
};
exports.changePassword = changePassword;
