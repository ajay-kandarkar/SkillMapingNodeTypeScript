"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const LoginService_1 = require("../Services/LoginService");
const LoginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: 'Email and password are required' });
            return;
        }
        const loginUser = {
            email,
            password,
        };
        const result = await (0, LoginService_1.LoginUserService)(loginUser);
        if (result && result.user) {
            const { user, token } = result;
            res.status(200).json({
                message: 'Login successful',
                user,
                token,
            });
        }
        else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.LoginController = LoginController;
