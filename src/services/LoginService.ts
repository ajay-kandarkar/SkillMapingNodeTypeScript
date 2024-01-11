import pool from '../Config/dbconnection';
import { LoginUser } from '../Models/LoginModel';

export const LoginUserService = async (user: LoginUser) => {
  try {
    const result = await pool.query(
      'Select * from userregistration ',
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};

