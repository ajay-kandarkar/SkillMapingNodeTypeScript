import pool from '../Config/dbconnection';
import { User } from '../Models/RegistrationModel';
import bcrypt from 'bcrypt';
const saltRounds = 1;
const nodemailer = require('nodemailer');

export const registerUser = async (user: User)=> {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    const result = await pool.query(
      'INSERT INTO userRegistration (firstname, lastname,phone,email,ischeck,password) VALUES (?,?,?,?,?,?)',
      [user.firstname, user.lastname,user.phone,user.email,user.ischeck,hashedPassword]
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};

