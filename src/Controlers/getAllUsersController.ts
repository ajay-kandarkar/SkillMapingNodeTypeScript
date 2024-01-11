import { Request, Response } from 'express';
import { getAllUsers } from '../Services/getAllUserServices';
export const getAllUsersController = async (req: Request, res: Response): Promise<void> => {
    try {
      const allUsers = await getAllUsers();
      res.json(allUsers);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };