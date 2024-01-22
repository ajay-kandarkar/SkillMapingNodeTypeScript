import pool from '../Config/dbconnection';
import { User } from '../Models/RegistrationModel';
import bcrypt from 'bcrypt';
import { sendEmail } from '../Helpers/SendMail';
const saltRounds = 10;
export const registerUser = async (user: User): Promise<number | null> => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    const [result] = await pool.query(
      'INSERT INTO userRegistration (firstName, lastName, phone, email, isCheck, password) VALUES (?, ?, ?, ?, ?, ?)',
      [user.firstName, user.lastName, user.phone, user.email, user.isCheck, hashedPassword]
    );
    if (result && 'insertId' in result) {
      const userId = result.insertId as number;
      const mailSubject = 'Mail Verification';
      const verificationLink = `http://localhost:3000/confirmRegister/${userId}`;
      const content = `Hi ${user.firstName} ${user.lastName},</br> Please verify your mail by clicking <a href="${verificationLink}">Click here</a>.`;
      const mailOptions = {
        from: 'ajaykandarkar170@gmail.com',
        to: user.email,
        subject: mailSubject,
        html: content,
      };
      await sendEmail(mailOptions);
      return userId;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export const confirmEmail = async (userId: number): Promise<void | null> => {
  try {
    const [result] = await pool.query('UPDATE userRegistration SET isconfirmed = true WHERE id = ?', [userId]);
  } catch (error) {
    return null;
  }
};



