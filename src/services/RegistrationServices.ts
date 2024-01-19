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
      console.log('Verification email sent successfully.');
      return userId;
    } else {
      console.error('Failed to register user. No insertId found in the result.');
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const confirmEmail = async (userId: number): Promise<void | null> => {
  try {
    const [result] = await pool.query('UPDATE userRegistration SET isconfirmed = true WHERE id = ?', [userId]);

    if (result && 'affectedRows' in result && result.affectedRows > 0) {
      console.log('Email confirmed successfully.');
    } else {
      console.error('Invalid user ID or user not found.');
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};



