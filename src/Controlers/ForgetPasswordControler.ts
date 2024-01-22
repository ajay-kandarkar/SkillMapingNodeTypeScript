import { Request, Response } from 'express';
const { forgotPassword } = require('../services/ForgotPasswordService'); 
export  const forgotPasswordController = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email is not provided' });
    }
    await forgotPassword(email);
    return res.json({ message: 'Password reset instructions sent to your email' });
  } catch (error : any) {
    console.error(error);
    if (error.code === 'EENVELOPE') {
      return res.status(500).json({ error: 'Error sending email' });
    } else {
      return res.status(500).send('Internal Server Error');
    }
  }
};
