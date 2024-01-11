import pool from '../Config/dbconnection';
import { User } from '../Models/RegistrationModel';
import bcrypt from 'bcrypt';
import { sendEmail } from '../Helpers/SendMail';
const saltRounds = 10; 

export const registerUser = async (user: User) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    const result = await pool.query(
      'INSERT INTO userRegistration (firstname, lastname, phone, email, ischeck, password) VALUES (?, ?, ?, ?, ?, ?)',
      [user.firstname, user.lastname, user.phone, user.email, user.ischeck, hashedPassword]
    );
    let mailSubject = "Mail Verification";
    const verificationLink = "http://localhost:8081/mail-verification"; 
    const content = `Hi ${user.firstname} ${user.lastname},<br> Please verify your mail by clicking <a href="${verificationLink}">here</a>.`;
    await sendEmail(user.email, mailSubject, content); 
    console.log("Verification email sent successfully.");
  } catch (error) {
    console.error(error);
    return null;
  }
};

