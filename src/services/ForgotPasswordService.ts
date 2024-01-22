import { RowDataPacket } from 'mysql2';
import pool from '../Config/dbconnection';
import { sendEmail } from '../Helpers/SendMail';
export const forgotPassword = async (email: string) => {
  try {
    const [result] = await pool.query<RowDataPacket[]>(
      'SELECT * FROM UserRegistration WHERE email = ?',
      [email]
    );
    if (result.length > 0) {
      const mailSubject = 'Mail Verification Forgot Password';
      const verificationLink = `http://localhost:3000/changePassword`;
      const content = `Hi <br> Please verify your mail by clicking <a href="${verificationLink}">Click here</a>.`;
      const mailOptions = {
        from: 'ajaykandarkar170@gmail.com',
        to: email,
        subject: mailSubject,
        html: content,
      };
      await sendEmail(mailOptions);
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

