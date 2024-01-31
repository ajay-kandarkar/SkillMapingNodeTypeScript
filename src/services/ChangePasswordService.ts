import { RowDataPacket } from 'mysql2';
import pool from '../Config/dbconnection';
import bcrypt from 'bcrypt';
const saltRounds = 10;
const getUserByResetToken = async (token: string): Promise<RowDataPacket[] | null> => {
  try {
    const [result] = await pool.query<RowDataPacket[]>(
      'SELECT * FROM UserRegistration WHERE reset_token = ? AND reset_token_expiry > NOW()',
      [token]
    );
    return result;
  } catch (error) {
    console.error('Error querying database in getUserByResetToken:', error);
    throw error;
  }
};

export const changePassword = async (token: string, newPassword: string) => {
  try {

    const user = await getUserByResetToken(token);
    const salt = await bcrypt.genSalt(saltRounds);
    const newHashedPassword = await bcrypt.hash(newPassword, salt);  
    if (user && user.length > 0) {
      const email = user[0].email;

      const updatePasswordQuery = 'UPDATE UserRegistration SET password = ? WHERE email = ?';
      await pool.query(updatePasswordQuery, [newHashedPassword, email]);

      const clearResetTokenQuery = 'UPDATE UserRegistration SET reset_token = NULL, reset_token_expiry = NULL WHERE email = ?';
      await pool.query(clearResetTokenQuery, [email]);

      return true;

    } else {
      console.error('Invalid or expired reset token in changePassword service');
      return false;
    }
  } catch (error) {
    console.error('Error in changePassword service:', error);
    throw error;
  }
};

