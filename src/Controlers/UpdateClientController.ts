import { updateClientById } from '../Services/updateClientService';
import { Request, Response } from 'express';
export const updateClientController = async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.userId, 10);
  const updatedData: any = req.body;
  try {
    await updateClientById(userId, updatedData);
    res.json({success: true, message: 'Client updated successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error.' });
  }
};
