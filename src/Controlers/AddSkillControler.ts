import { Request, Response } from 'express';
import { addSkill } from '../Services/AddSkillService';
import { Skill } from '../Models/AddSkillModel';
export const addSkillController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      res.status(400).json({ error: 'Incomplete skill information provided' });
      return;
    }
    const skill: Skill = {
      name: name,
      description: description
    };
    const result = await addSkill(skill);
    if (typeof result === 'string') {
      res.status(400).json({ error: result });
      return;
    }
    res.status(200).json({ message: 'Skill added successfully' });
  } catch (error) {
    console.error('Error adding skill:', error);
    res.status(500).send('Internal Server Error');
  }
};
