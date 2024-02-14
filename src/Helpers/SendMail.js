"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { SMTP_MAIL, SMTP_PASSWORD } = process.env;
const sendEmail = async (mailOptions) => {
    try {
        const transporter = nodemailer_1.default.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: SMTP_MAIL,
                pass: SMTP_PASSWORD,
            },
        });
        const info = await transporter.sendMail(mailOptions);
        console.log("Mail sent successfully:", info.response);
    }
    catch (error) {
        console.error("Error sending email:", error.message);
    }
};
exports.sendEmail = sendEmail;
