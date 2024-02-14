"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailConfirmationController = exports.registrationController = void 0;
const RegistrationServices_1 = require("../Services/RegistrationServices");
const registrationController = async (req, res) => {
    try {
        const { firstName, lastName, phone, email, isCheck, password } = req.body;
        if (!firstName || !lastName || !phone || !email || isCheck === undefined || !password) {
            res.status(400).json({ error: 'Incomplete user information provided' });
            return;
        }
        const newUser = {
            firstName,
            lastName,
            phone,
            email,
            isCheck,
            password,
        };
        const userId = await (0, RegistrationServices_1.registerUser)(newUser);
        if (userId !== null) {
            const verificationLink = `http://localhost:8081/mail-verification/${userId}`;
            console.log(`Verification Link: ${verificationLink}`);
            res.json(Object.assign({ id: userId, message: 'User registered successfully confirm mail verification' }, newUser));
        }
        else {
            res.status(500).send({ error: 'This User is Already Registered' });
        }
    }
    catch (error) {
        res.status(500).send('Internal Server Error');
    }
};
exports.registrationController = registrationController;
const EmailConfirmationController = async (req, res) => {
    try {
        const userId = parseInt(req.params.userId, 10);
        if (isNaN(userId)) {
            res.status(400).json({ error: 'Invalid user ID provided' });
            return;
        }
        await (0, RegistrationServices_1.confirmEmail)(userId);
        res.json({
            message: 'Email confirmed successfully',
        });
    }
    catch (error) {
        res.json({
            message: 'Error occure confirmed successfully'
        });
        res.status(500).send('Internal Server Error');
    }
};
exports.EmailConfirmationController = EmailConfirmationController;
