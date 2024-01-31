import { Request, Response } from 'express';
import { Client } from '../Models/AddClientModel';
import { addClient } from '../Services/AddClientService';
export const addClientControler = async (req: Request, res: Response): Promise<void> => {
    try {
        const {name,location,country_id,domain_id } = req.body;
        if (!name || !location || !country_id || !domain_id) {
            res.status(400).json({ error: 'Incomplete clinet information provided' });
            return;
        }
        else {
            const client : Client = {
                name: name,
                location: location,
                country_id : country_id,
                domain_id : domain_id

            };
            await addClient(client);
            res.status(200).json({ message: "skill add sucesfully" })
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};
