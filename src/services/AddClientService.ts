import pool from '../Config/dbconnection';
import { Client } from '../Models/AddClientModel';
export const addClient = async (client: Client): Promise<void | null> => {
  try {
     await pool.query(
      'INSERT INTO client (name,location,country_id,domain_id) VALUES (?,?,?,?)',
      [client.name,client.location,client.country_id,client.domain_id]
    );
  } catch (error) {
    return null;
  }
}
