import { Request, Response } from 'express';
import { getAllSkill } from '../Services/GetAllSkillService';
export const getAllSkillController = async (req: Request, res: Response): Promise<void> => {
  try {
    const allUsers = await getAllSkill();
    res.json(allUsers);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};