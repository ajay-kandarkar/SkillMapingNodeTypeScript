import pool from '../Config/dbconnection';
export const getAllCountry = async () => {
    try {
      const result = await pool.query('SELECT * FROM  country');
      return result; 
    } catch (error) {
      console.error(error);
      return error;
    }
  };