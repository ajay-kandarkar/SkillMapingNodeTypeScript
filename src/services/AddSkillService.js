"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSkill = void 0;
const dbconnection_1 = __importDefault(require("../Config/dbconnection"));
const addSkill = async (skill) => {
    try {
        await dbconnection_1.default.query('INSERT INTO skill (name, description) VALUES (?, ?)', [skill.name, skill.description]);
    }
    catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return 'Skill with the same name already exists.';
        }
        throw error;
    }
};
exports.addSkill = addSkill;
