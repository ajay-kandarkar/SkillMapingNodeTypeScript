import { Request, Response } from 'express';
import { registerUser } from '../services/RegistrationServices';
import { User } from '../Models/RegistrationModel';
export const RegistrationController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstname, lastname, phone, email, ischeck,password } = req.body;
    if (!firstname || !lastname || !phone || !email || ischeck === undefined || !password) {
      res.status(400).json({ error: 'Incomplete user information provided' });
      return;
    }
    const newUser: User = {
      firstname,
      lastname,
      phone,
      email,
      ischeck,
      password,
    };

    const userId = await registerUser(newUser);
    if (userId !== null) {
      res.json({ id: userId, ...newUser });
    } else {
      res.status(500).send('Failed to add user');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

