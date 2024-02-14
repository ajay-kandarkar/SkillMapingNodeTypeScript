"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addClient = void 0;
const dbconnection_1 = __importDefault(require("../Config/dbconnection"));
const addClient = async (client) => {
    try {
        await dbconnection_1.default.query('INSERT INTO client (name,location,country_id,domain_id) VALUES (?,?,?,?)', [client.name, client.location, client.country_id, client.domain_id]);
    }
    catch (error) {
        return null;
    }
};
exports.addClient = addClient;
