import pool from '../Config/dbconnection';
export const getAllSkill = async () => {
    try {
      const result = await pool.query('SELECT * FROM skill');
      return result; 
    } catch (error) {
      console.error(error);
      return error;
    }
  };