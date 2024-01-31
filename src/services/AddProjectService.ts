import pool from '../Config/dbconnection';
import { Project } from '../Models/AddProjectModel';
export const addProject = async (project: Project): Promise<void | null> => {
  try {
     await pool.query(
      'insert into projects(project_name,description,status,client_id,skill_id,registration_id) VALUES (?,?,?,?,?,?)',
      [project.project_name, project.description, project.status, project.client_id, project.skill_id, project.registration_id]
    )
  } catch (error) {
    return null;
  }
}
