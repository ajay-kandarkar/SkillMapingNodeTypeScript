import { Request, Response } from 'express';
import { GetLoginUserServiceById } from '../Services/GetUserById';

export const getLoginUserByIdController = async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.id, 10);
  try {
    const user = await GetLoginUserServiceById(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
