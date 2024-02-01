import { updateProjectById } from '../Services/UpdateProjectService';
import { Request, Response } from 'express';
export const updateProjectControllerById = async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.userId, 10);
  const updatedData: any = req.body;
  try {
    await updateProjectById(userId, updatedData);
    res.json({success: true, message: 'Project updated successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error.'});
  }
};
