import { Request, Response } from 'express';
import { forgotPassword } from '../Services/ForgotPasswordService';
export const forgotPasswordController = async (req: Request, res: Response) => {
  try {
    console.log(req);
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email is not provided' });
    }
    const result = await forgotPassword(email);
    if (result === null) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.json({ message: 'Password reset instructions sent to your email' });
  } catch (error: any) {
    console.error('Error in forgotPasswordController:', error);
    if (error.code === 'EENVELOPE') {
      return res.status(500).json({ error: 'Error sending email' });
    } else {
      return res.status(500).send('Internal Server Error');
    }
  }
};

