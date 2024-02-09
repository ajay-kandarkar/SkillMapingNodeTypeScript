import  pool  from '../Config/dbconnection' 
 export const deleteClient = async (userId: number) => {
    try {
      await pool.query(
        'Delete  FROM client WHERE id = ?',
        [userId]
      );
    } catch (error) {
       throw error; 
    }
  };