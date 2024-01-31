import { Request, Response } from 'express';
import { registerUser, confirmEmail } from '../Services/RegistrationServices';
import { User } from '../Models/RegistrationModel';
export const registrationController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, phone, email, isCheck, password } = req.body;
    if (!firstName || !lastName || !phone || !email || isCheck === undefined || !password) {
      res.status(400).json({ error: 'Incomplete user information provided' });
      return;
    }
    const newUser: User = {
      firstName,
      lastName,
      phone,
      email,
      isCheck,
      password,
    };
    const userId = await registerUser(newUser);
    if (userId !== null) {
      const verificationLink = `http://localhost:8081/mail-verification/${userId}`;
      console.log(`Verification Link: ${verificationLink}`);
      res.json({ id: userId, message: 'User registered successfully confirm mail verification', ...newUser });
    } else {
      res.status(500).send({ error: 'This User is Already Registered' });
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

export const EmailConfirmationController = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = parseInt(req.params.userId, 10);
    if (isNaN(userId)) {
      res.status(400).json({ error: 'Invalid user ID provided' });
      return;
    }
    await confirmEmail(userId);
    res.json({
      message: 'Email confirmed successfully',
    });
  } catch (error) {
    res.json({
      message: 'Error occure confirmed successfully'
    })
    res.status(500).send('Internal Server Error');
  }
};