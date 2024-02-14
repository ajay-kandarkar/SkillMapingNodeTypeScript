"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProject = void 0;
const dbconnection_1 = __importDefault(require("../Config/dbconnection"));
const addProject = async (project) => {
    try {
        const { project_name, description, status, client_id, skill_id, registration_id, draft_editor_content } = project;
        console.log("projects : ", project);
        console.log("draft editor content : ", draft_editor_content);
        await dbconnection_1.default.query('INSERT INTO projects (project_name, description, status, client_id, skill_id, registration_id, draft_editor_content) VALUES (?, ?, ?, ?, ?, ?, ?)', [project_name, description, status, client_id, skill_id, registration_id, draft_editor_content]);
    }
    catch (error) {
        return null;
    }
};
exports.addProject = addProject;
