"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmEmail = exports.registerUser = void 0;
const dbconnection_1 = __importDefault(require("../Config/dbconnection"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const SendMail_1 = require("../Helpers/SendMail");
const saltRounds = 10;
const registerUser = async (user) => {
    try {
        const salt = await bcrypt_1.default.genSalt(saltRounds);
        const hashedPassword = await bcrypt_1.default.hash(user.password, salt);
        const [result] = await dbconnection_1.default.query('INSERT INTO userRegistration (first_name, last_name, phone, email, is_check, password) VALUES (?, ?, ?, ?, ?, ?)', [user.firstName, user.lastName, user.phone, user.email, user.isCheck, hashedPassword]);
        if (result && 'insertId' in result) {
            const userId = result.insertId;
            const mailSubject = 'Mail Verification';
            const verificationLink = `http://localhost:3000/confirmRegister/${userId}`;
            const content = `Hi ${user.firstName} ${user.lastName},</br> Please verify your mail by clicking <a href="${verificationLink}">Click here</a>.`;
            const mailOptions = {
                from: 'ajaykandarkar170@gmail.com',
                to: user.email,
                subject: mailSubject,
                html: content,
            };
            await (0, SendMail_1.sendEmail)(mailOptions);
            return userId;
        }
        else {
            return null;
        }
    }
    catch (error) {
        return null;
    }
};
exports.registerUser = registerUser;
const confirmEmail = async (userId) => {
    try {
        const [result] = await dbconnection_1.default.query('UPDATE userRegistration SET is_confirmed = true WHERE id = ?', [userId]);
    }
    catch (error) {
        return null;
    }
};
exports.confirmEmail = confirmEmail;
