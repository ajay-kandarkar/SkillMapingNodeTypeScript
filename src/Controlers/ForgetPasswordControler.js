"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotPasswordController = void 0;
const ForgotPasswordService_1 = require("../Services/ForgotPasswordService");
const forgotPasswordController = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ error: 'Email is not provided' });
        }
        const result = await (0, ForgotPasswordService_1.forgotPassword)(email);
        if (result === null) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.json({ message: 'Password reset instructions sent to your email' });
    }
    catch (error) {
        console.error('Error in forgotPasswordController:', error);
        if (error.code === 'EENVELOPE') {
            return res.status(500).json({ error: 'Error sending email' });
        }
        else {
            return res.status(500).send('Internal Server Error');
        }
    }
};
exports.forgotPasswordController = forgotPasswordController;
