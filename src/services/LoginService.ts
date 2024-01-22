import bcrypt from 'bcrypt';
import { LoginUser } from '../Models/LoginModel';
import  pool  from '../Config/dbconnection';
import { RowDataPacket } from 'mysql2';
export const LoginUserService = async (user: LoginUser) => {
  try {
    const [result] = await pool.query<RowDataPacket[]>(
      'SELECT email,password FROM userregistration WHERE email = ?',
      [user.email]
    );
    if (result && result.length > 0) {
      const storedUser = result[0];
      if ('password' in storedUser) {
        const isPasswordMatch = await bcrypt.compare(user.password, storedUser.password);
        if (isPasswordMatch) {
          return storedUser;
        } else {
          return null;
        }
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};


