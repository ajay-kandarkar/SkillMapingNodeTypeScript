import pool from '../Config/dbconnection';
export const getDomain = async () => {
    try {
      const result = await pool.query('SELECT * FROM  domain');
      return result; 
    } catch (error) {
      console.error(error);
      return error;
    }
  };
  