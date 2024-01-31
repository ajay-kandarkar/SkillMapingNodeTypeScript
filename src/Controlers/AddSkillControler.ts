import { Request, Response } from 'express';
import { addSkill } from '../Services/AddSkillService';
import { Skill } from '../Models/AddSkillModel';
export const addSkillControler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, description } = req.body;
        if (!name || !description) {
            res.status(400).json({ error: 'Incomplete user information provided' });
            return;
        }
        else {
            const skill: Skill = {
                name: name,
                description: description
            };
            await addSkill(skill);
            res.status(200).json({ message: "skill add sucesfully" })
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};
