"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const dbconnection_1 = __importDefault(require("../Config/dbconnection"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const LoginUserService = async (user) => {
    try {
        const [result] = await dbconnection_1.default.query('SELECT email,password FROM userregistration WHERE email = ?', [user.email]);
        if (result && result.length > 0) {
            const storedUser = result[0];
            if ('password' in storedUser) {
                const isPasswordMatch = await bcrypt_1.default.compare(user.password, storedUser.password);
                if (isPasswordMatch) {
                    const token = jsonwebtoken_1.default.sign({ email: storedUser.email }, '12345678', {
                        expiresIn: '960',
                    });
                    return { user: storedUser, token };
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }
    catch (error) {
        return null;
    }
};
exports.LoginUserService = LoginUserService;
