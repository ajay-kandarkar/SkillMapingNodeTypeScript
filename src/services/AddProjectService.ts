import pool from '../Config/dbconnection';
import { Project } from '../Models/AddProjectModel';
export const addProject = async (project: Project): Promise<void | null> => {
  try {
    const { project_name, description, status, client_id, skill_id, registration_id, draft_editor_content } = project;
    console.log("projects : ",project)
    console.log("draft editor content : ",draft_editor_content)
    await pool.query(
      'INSERT INTO projects (project_name, description, status, client_id, skill_id, registration_id, draft_editor_content) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [project_name, description, status, client_id, skill_id, registration_id, draft_editor_content]
    );
  } catch (error) {
    return null;
  }
};

