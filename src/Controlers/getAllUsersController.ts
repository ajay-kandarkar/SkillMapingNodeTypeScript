import { Request, Response } from 'express';
import { getAllUsers } from '../Services/GetAllUserServices';
export const getAllUsersController = async (req: Request, res: Response): Promise<void> => {
  try {
    const allUsers = await getAllUsers();
    res.json(allUsers);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};