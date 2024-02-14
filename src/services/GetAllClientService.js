"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllClient = void 0;
const dbconnection_1 = __importDefault(require("../Config/dbconnection"));
const getAllClient = async () => {
    try {
        const result = await dbconnection_1.default.query('SELECT client.id,client.name, client.location , country.name AS country_name, domain.name AS domain_name FROM client JOIN country ON client.country_id = country.id JOIN domain ON client.domain_id = domain.id;');
        return result;
    }
    catch (error) {
        console.error(error);
        return error;
    }
};
exports.getAllClient = getAllClient;
