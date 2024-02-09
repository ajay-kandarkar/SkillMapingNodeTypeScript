import pool from '../Config/dbconnection';
export const updateClientById = async (userId: number, updatedData: any) => {
  try {
    const connection = await pool.getConnection();
    await connection.query('UPDATE client SET ? WHERE id = ?', [updatedData, userId]);;
    connection.release();
  } catch (error) {
    throw error;
  }
};

