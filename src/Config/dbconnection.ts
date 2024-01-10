import { createPool, Pool, PoolOptions } from 'mysql2/promise';
const dbConfig: PoolOptions = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'skillmapping',
   
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



