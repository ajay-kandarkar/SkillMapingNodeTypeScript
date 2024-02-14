"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotPassword = void 0;
const dbconnection_1 = __importDefault(require("../Config/dbconnection"));
const SendMail_1 = require("../Helpers/SendMail");
const TokenGenerator_1 = require("../Helpers/TokenGenerator");
const getUserByEmail = async (email) => {
    try {
        const [result] = await dbconnection_1.default.query('SELECT * FROM UserRegistration WHERE email = ?', [email]);
        return result;
    }
    catch (error) {
        console.error('Error querying database in getUserByEmail:', error);
        throw error;
    }
};
const storeResetTokenInDatabase = async (email, token, expiry) => {
    try {
        const updateQuery = 'UPDATE UserRegistration SET reset_token = ?, reset_token_expiry = ? WHERE email = ?';
        await dbconnection_1.default.query(updateQuery, [token, expiry, email]);
    }
    catch (error) {
        console.error('Error storing reset token in database:', error);
        throw error;
    }
};
const forgotPassword = async (email) => {
    try {
        const user = await getUserByEmail(email);
        if (user && user.length > 0) {
            const resetToken = (0, TokenGenerator_1.generateUniqueToken)();
            const resetTokenExpiry = new Date(Date.now() + 15 * 60 * 1000);
            await storeResetTokenInDatabase(email, resetToken, resetTokenExpiry);
            const mailSubject = 'Password Reset';
            const resetLink = `http://localhost:3000/changePassword?token=${resetToken}`;
            const content = `Hi,<br> To reset your password, click <a href="${resetLink}">here</a>.`;
            const mailOptions = {
                from: 'ajaykandarkar170@gmail.com',
                to: email,
                subject: mailSubject,
                html: content,
            };
            await (0, SendMail_1.sendEmail)(mailOptions);
        }
        else {
            console.error('Email not found in forgotPassword service');
            return null;
        }
    }
    catch (error) {
        console.error('Error in forgotPassword service:', error);
        throw error;
    }
};
exports.forgotPassword = forgotPassword;
