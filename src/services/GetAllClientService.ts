import pool from '../Config/dbconnection';
export const getAllClient = async () => {
    try {
      const result = await pool.query('SELECT client.id,client.name, client.location , country.name AS country_name, domain.name AS domain_name FROM client JOIN country ON client.country_id = country.id JOIN domain ON client.domain_id = domain.id;');
      return result; 
    } catch (error) {
      console.error(error);
      return error;
    }
  };