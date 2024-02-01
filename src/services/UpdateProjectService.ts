import pool from '../Config/dbconnection';
export const updateProjectById = async (userId: number, updatedData: any) => {
  try {
    const connection = await pool.getConnection();
    await connection.query('UPDATE Projects SET ? WHERE id = ?', [updatedData, userId]);
    connection.release();
  } catch (error) {
    throw error;
  }
};