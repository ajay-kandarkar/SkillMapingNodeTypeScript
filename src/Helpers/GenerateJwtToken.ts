import jwt from 'jsonwebtoken';
const generateJwtToken = (user: {}): string => {
    const secretKey = '12345678'; 
    const token = jwt.sign({ user }, secretKey, { expiresIn: '1h' }); 
    return token;
  };