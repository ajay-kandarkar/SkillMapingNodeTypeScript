import pool from '../Config/dbconnection';
export const getAllUsers = async () => {
    try {
      const result = await pool.query('SELECT * FROM userRegistration');
      return result; 
    } catch (error) {
      console.error(error);
      return null;
    }
  };