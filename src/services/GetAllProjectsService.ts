import pool from '../Config/dbconnection';
export const getAllProjects = async () => {
  try {
    const result = await pool.query(
      'SELECT p.id, p.project_name,p.description,p.draft_editor_content As draft_editor_content, c.name AS client_name, s.name AS skill_name FROM projects p, client c, skill s WHERE p.client_id = c.id AND p.skill_id = s.id'
    );
    console.log("Result : ",result)
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};



  