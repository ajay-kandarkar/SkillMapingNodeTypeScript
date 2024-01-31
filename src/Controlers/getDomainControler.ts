import { Request, Response } from 'express';
import { getDomain } from '../Services/GetDomainService';
export const getDomainControler = async (req: Request, res: Response): Promise<void> => {
  try {
    const domain = await getDomain();
    res.json(domain);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};