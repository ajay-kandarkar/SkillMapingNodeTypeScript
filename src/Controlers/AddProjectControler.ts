import { Request, Response } from 'express';
import { addProject } from '../Services/AddProjectService';
import { Project } from '../Models/AddProjectModel';
export const addProjectControler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { project_name, description, status, skill_id, client_id, registration_id,draft_editor_content } = req.body;
        if (!project_name || !description || !status || !skill_id || !client_id) {
            res.status(400).json({ error: 'Incomplete Project  information provided' });
            return;
        }
        else {
            const project: Project = {
                project_name,
                description,
                status,
                skill_id,
                client_id,
                registration_id,
                draft_editor_content
            };
         
            await addProject(project);
            res.status(200).json({ message: "project  add sucesfully" })
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};
