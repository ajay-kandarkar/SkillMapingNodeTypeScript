"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProjects = void 0;
const dbconnection_1 = __importDefault(require("../Config/dbconnection"));
const getAllProjects = async () => {
    try {
        const result = await dbconnection_1.default.query('SELECT p.id, p.project_name,p.description,p.draft_editor_content As draft_editor_content, c.name AS client_name, s.name AS skill_name FROM projects p, client c, skill s WHERE p.client_id = c.id AND p.skill_id = s.id');
        console.log("Result : ", result);
        return result;
    }
    catch (error) {
        console.error(error);
        return error;
    }
};
exports.getAllProjects = getAllProjects;
