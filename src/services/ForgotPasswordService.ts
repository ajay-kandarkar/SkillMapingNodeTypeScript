import { RowDataPacket } from 'mysql2';
import pool from '../Config/dbconnection';
import { sendEmail } from '../Helpers/SendMail';
import { generateUniqueToken } from '../Helpers/TokenGenerator';

const getUserByEmail = async (email: string): Promise<RowDataPacket[] | null> => {
  try {
    const [result] = await pool.query<RowDataPacket[]>(
      'SELECT * FROM UserRegistration WHERE email = ?',
      [email]
    );
    return result;
  } catch (error) {
    console.error('Error querying database in getUserByEmail:', error);
    throw error;
  }
};

const storeResetTokenInDatabase = async (email: string, token: string, expiry: Date) => {
  try {
    const updateQuery = 'UPDATE UserRegistration SET reset_token = ?, reset_token_expiry = ? WHERE email = ?';
    await pool.query(updateQuery, [token, expiry, email]);
  } catch (error) {
    console.error('Error storing reset token in database:', error);
    throw error;
  }
};

export const forgotPassword = async (email: string) => {
  try {
    const user = await getUserByEmail(email);

    if (user && user.length > 0) {
      const resetToken = generateUniqueToken();
      const resetTokenExpiry = new Date(Date.now() + 15 * 60 * 1000);
      await storeResetTokenInDatabase(email, resetToken, resetTokenExpiry);
      const mailSubject = 'Password Reset';
      const resetLink = `http://localhost:3000/changePassword?token=${resetToken}`;
      const content = `Hi,<br> To reset your password, click <a href="${resetLink}">here</a>.`;
      const mailOptions = {
        from: 'ajaykandarkar170@gmail.com',
        to: email,
        subject: mailSubject,
        html: content,
      };
      await sendEmail(mailOptions);
    } else {
      console.error('Email not found in forgotPassword service');
      return null;
    }
  } catch (error) {
    console.error('Error in forgotPassword service:', error);
    throw error;
  }
}