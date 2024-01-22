
import express from 'express';
import { RegistrationController } from '../Controlers/RegistrationController';
import { getAllUsersController } from '../Controlers/GetAllUsersController';
import { EmailConfirmationController } from '../Controlers/RegistrationController';
import { LoginController } from '../Controlers/LoginController';
import { getLoginUserByIdController } from '../Controlers/GetUserByIdControler';
import { forgotPasswordController } from '../Controlers/ForgetPasswordControler';

const router = express.Router();
router.post('/register', RegistrationController);
router.get('/get-register-user',getAllUsersController);
router.post('/login',LoginController)
router.get('/mail-verification/:userId', EmailConfirmationController);
router.get('/get-login-user/:id',getLoginUserByIdController)
router.post('/forget-password',forgotPasswordController)
export default router;
