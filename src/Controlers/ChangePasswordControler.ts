import { Request, Response } from 'express';
import { changePassword } from '../Services/ChangePasswordService';
export const changePasswordController = async (req: Request, res: Response) => {
  try {
    const { token, newPassword } = req.body;
    if (!token || !newPassword) {
      return res.status(400).json({ error: 'Token and newPassword are required' });
    }
    const isPasswordChanged = await changePassword(token, newPassword);
    if (isPasswordChanged) {
      return res.status(200).json({ message: 'Password changed successfully' });
    } else {
      return res.status(400).json({ error: 'Invalid or expired reset token' });
    }
  } catch (error) {
    console.error('Error in changePasswordController:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
