import { Request, Response } from 'express';
import { getAllCountry } from '../Services/GetCountryService';
export const getAllCountryControler = async (req: Request, res: Response): Promise<void> => {
  try {
    const allUsers = await getAllCountry();
    res.json(allUsers);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};