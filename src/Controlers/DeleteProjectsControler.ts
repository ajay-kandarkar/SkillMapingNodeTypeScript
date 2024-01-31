import { Request, Response } from 'express';
import { deleteClientbyId } from '../Services/DeleteProjectsService';
export const deleteClientByIdController = async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.id, 10);
  try {
    await deleteClientbyId(userId);
    res.status(200).json({ message: 'user deleted' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};