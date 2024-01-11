import { Request, Response } from 'express';
import { LoginUser } from '../Models/LoginModel';
import { LoginUserService } from '../Services/LoginService';
export const RegistrationController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email,password } = req.body;
    if ( !email || !password) {
      res.status(400).json({ error: 'Incomplete user information provided' });
      return;
    }
    const newUser: LoginUser = {
      email,
      password,
    };
    const userId = await LoginUserService(newUser);
    if (userId !== null) {
      res.json({ id: userId, ...newUser });
    } else {
      res.status(500).send('Failed to register user');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

