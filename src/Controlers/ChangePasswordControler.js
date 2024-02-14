"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePasswordController = void 0;
const ChangePasswordService_1 = require("../Services/ChangePasswordService");
const changePasswordController = async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        if (!token || !newPassword) {
            return res.status(400).json({ error: 'Token and newPassword are required' });
        }
        const isPasswordChanged = await (0, ChangePasswordService_1.changePassword)(token, newPassword);
        if (isPasswordChanged) {
            return res.status(200).json({ message: 'Password changed successfully' });
        }
        else {
            return res.status(400).json({ error: 'Invalid or expired reset token' });
        }
    }
    catch (error) {
        console.error('Error in changePasswordController:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.changePasswordController = changePasswordController;
