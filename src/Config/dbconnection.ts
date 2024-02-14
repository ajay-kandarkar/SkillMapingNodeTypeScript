import { createPool, Pool, PoolOptions } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); 

const dbConfig: PoolOptions = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'skillmapping',
};

const pool: Pool = createPool(dbConfig);

pool.getConnection()
    .then((connection) => {
        console.log(`Connected to the database!`);
        connection.release();
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error.message);
    });

export default pool;




