"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'skillmapping',
};
const pool = (0, promise_1.createPool)(dbConfig);
pool.getConnection()
    .then((connection) => {
    console.log(`Connected to the database!`);
    connection.release();
})
    .catch((error) => {
    console.error('Error connecting to the database:', error.message);
});
exports.default = pool;
