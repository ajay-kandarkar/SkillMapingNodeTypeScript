"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertProjectService = void 0;
const dbconnection_1 = __importDefault(require("../Config/dbconnection"));
const insertProjectService = async (project) => {
    try {
        const [result] = await dbconnection_1.default.query('INSERT INTO projects (project_name, description, status, skill_name, client_name) VALUES (?, ?, ?, ?, ?)', [project.project_name, project.description, project.status, project.skill_name, project.client_name]);
    }
    catch (error) {
        return null;
    }
};
exports.insertProjectService = insertProjectService;
