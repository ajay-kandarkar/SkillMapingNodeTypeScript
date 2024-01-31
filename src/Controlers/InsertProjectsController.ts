import { Request, Response } from 'express';
import { insertProjectService } from '../Services/InsertProjectService';
import { InsertProjectModel } from '../Models/InserProjectModel';
export const insertProjectController = async (req: Request, res: Response): Promise<void> => {
  try {
    const {project_name, description,status,skill_name,client_name  } = req.body;
    if (!project_name || !description || !status || !skill_name || !client_name) {
      res.status(400).json({ error: 'Incomplete user information provided' });
      return;
    }
    const newProjects: InsertProjectModel = {
      project_name,
      description,
      status,
      skill_name,
      client_name,
    };
    const userId = await insertProjectService(newProjects);
    if (userId !== null) {
      res.json({ id: userId, message: 'Project Added Succesfully', ...newProjects });
    } else {
      res.status(500).send({ error: 'This project is already present'});
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

