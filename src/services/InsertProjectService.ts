import pool from '../Config/dbconnection';
import { InsertProjectModel } from '../Models/InserProjectModel';
export const insertProjectService = async (project: InsertProjectModel): Promise<void | null> => {
  try {
    const [result] = await pool.query(
      'INSERT INTO projects (project_name, description, status, skill_name, client_name) VALUES (?, ?, ?, ?, ?)',
      [project.project_name,project.description,project.status,project.skill_name,project.client_name]
    );
   } catch (error) {
    return null;
  }
}
