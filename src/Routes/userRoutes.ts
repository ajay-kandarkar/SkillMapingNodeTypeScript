import express from 'express';
import { registrationController } from '../Controlers/RegistrationController';
import { getAllUsersController } from '../Controlers/GetAllUsersController';
import { EmailConfirmationController } from '../Controlers/RegistrationController';
import { LoginController } from '../Controlers/LoginController';
import { getLoginUserByIdController } from '../Controlers/GetUserByIdControler';
import { forgotPasswordController } from '../Controlers/ForgetPasswordControler';
import { changePasswordController } from '../Controlers/ChangePasswordControler';
import { getAllProjectsController } from '../Controlers/GetAllProjects';
import { deleteClientByIdController } from '../Controlers/DeleteProjectsControler';
import { updateClientById } from '../Services/updateClientService';
import { insertProjectController } from '../Controlers/InsertProjectsController';
import { getAllSkillController } from '../Controlers/GetAllSkillControler';
import { addSkillControler } from '../Controlers/AddSkillControler';
import { getAllCountryControler } from '../Controlers/GetCountry';
import { getDomainControler } from '../Controlers/getDomainControler';
import { addClientControler } from '../Controlers/AddClientControler';
import { getAllClientController } from '../Controlers/GetAllClientControler';
import { addProjectControler } from '../Controlers/AddProjectControler';

const router = express.Router();

router.post('/register', registrationController);
router.get('/get-register-user',getAllUsersController);
router.post('/login',LoginController)
router.get('/mail-verification/:userId', EmailConfirmationController);
router.get('/get-login-user/:id',getLoginUserByIdController)
router.post('/forget-password',forgotPasswordController)
router.post('/change-password', changePasswordController);
router.put('/update-client/:id',updateClientById);
router.post('/insertProject',insertProjectController);



// new api
router.get("/get-all-skill",getAllSkillController)
router.post("/add-skill",addSkillControler)
router.get("/get-country",getAllCountryControler)
router.get("/get-domain",getDomainControler)
router.post("/add-client",addClientControler)
router.get("/get-all-client",getAllClientController)
router.post("/add-projects",addProjectControler)
router.delete('/delete-project/:id',deleteClientByIdController);

//projects new api 
router.get('/get-allProjects',getAllProjectsController);


export default router;
