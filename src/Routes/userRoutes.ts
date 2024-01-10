
import express from 'express';

import { RegistrationController } from '../Controlers/RegistrationController';

const router = express.Router();

router.post('/register', RegistrationController);

export default router;
