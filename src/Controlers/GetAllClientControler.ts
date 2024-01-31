import { Request, Response } from 'express';
import { getAllClient } from '../Services/GetAllClientService';
export const getAllClientController = async (req: Request, res: Response): Promise<void> => {
  try {
    const allClient = await getAllClient();
    res.json(allClient);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};