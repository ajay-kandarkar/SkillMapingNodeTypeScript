import { Request, Response } from 'express';
import { deleteClient } from '../Services/DeleteClientService';
export const deletClient = async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.userId, 10);
  try {
    await deleteClient(userId);
    res.status(200).json({ message: 'Client deleted' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


  