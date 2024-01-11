
import express from 'express';
import { RegistrationController } from '../Controlers/RegistrationController';
import { getAllUsersController } from '../Controlers/getAllUsersController';
const router = express.Router();
router.post('/register', RegistrationController);
router.get('/get-login',getAllUsersController);
router.post('/login',)
export default router;
