import  pool  from '../Config/dbconnection' 
import { RowDataPacket } from 'mysql2';
import { User } from '../Models/RegistrationModel';
  export const GetLoginUserServiceById = async (userId: number): Promise<User | null> => {
    try {
      const [result] = await pool.query<RowDataPacket[]>(
        'SELECT * FROM UserRegistration WHERE id = ?',
        [userId]
      );
      if (result.length > 0) {
        const user: User = result[0] as User; 
        return user;
      } else {
        return null;
      }
    } catch (error) {
        console.log(error)
      throw error; 
    }
  };
