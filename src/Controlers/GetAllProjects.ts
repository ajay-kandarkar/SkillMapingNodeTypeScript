import { Request, Response } from 'express';
import { getAllProjects } from '../Services/GetAllProjectsService';
export const getAllProjectsController = async (req: Request, res: Response): Promise<void> => {
  try {
    const allProjects = await getAllProjects();
    console.log("All projects : ",allProjects)
    res.json(allProjects);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};