import crypto from 'crypto';
export const generateUniqueToken = (): string => {
  const tokenLength = 32; 
  return crypto.randomBytes(tokenLength).toString('hex');
};
