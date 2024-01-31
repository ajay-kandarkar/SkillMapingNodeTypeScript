import jwt from 'jsonwebtoken';
const secretKey = 'yourSecretKey'; 
export const verifyUniqueToken = (token: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
};
