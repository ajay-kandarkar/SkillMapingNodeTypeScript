import  pool  from '../Config/dbconnection' 
 export const deleteClientbyId = async (userId: number) => {
    try {
      await pool.query(
        'Delete  FROM projects WHERE id = ?',
        [userId]
      );
    } catch (error) {
       throw error; 
    }
  };