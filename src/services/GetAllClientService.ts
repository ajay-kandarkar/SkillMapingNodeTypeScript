import pool from '../Config/dbconnection';
export const getAllClient = async () => {
    try {
      const result = await pool.query('SELECT * FROM client');
      return result; 
    } catch (error) {
      console.error(error);
      return error;
    }
  };