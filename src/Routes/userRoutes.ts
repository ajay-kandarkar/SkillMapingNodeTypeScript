
import express from 'express';
import { RegistrationController } from '../Controlers/RegistrationController';
import { getAllUsersController } from '../Controlers/getAllUsersController';
import { EmailConfirmationController } from '../Controlers/RegistrationController';

const router = express.Router();
router.post('/register', RegistrationController);
router.get('/get-login',getAllUsersController);
router.post('/login',)
router.get('/mail-verification/:userId', EmailConfirmationController);
export default router;
