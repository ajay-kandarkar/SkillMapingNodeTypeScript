
import express from 'express';
import { RegistrationController } from '../Controlers/RegistrationController';
import { getAllUsersController } from '../Controlers/GetAllUsersController';
import { EmailConfirmationController } from '../Controlers/RegistrationController';
import { LoginController } from '../Controlers/LoginController';
const router = express.Router();
router.post('/register', RegistrationController);
router.get('/get-login',getAllUsersController);
router.post('/login',LoginController)
router.get('/mail-verification/:userId', EmailConfirmationController);
export default router;
