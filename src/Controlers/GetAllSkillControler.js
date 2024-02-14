"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllSkillController = void 0;
const GetAllSkillService_1 = require("../Services/GetAllSkillService");
const getAllSkillController = async (req, res) => {
    try {
        const allUsers = await (0, GetAllSkillService_1.getAllSkill)();
        res.json(allUsers);
    }
    catch (error) {
        res.status(500).send('Internal Server Error');
    }
};
exports.getAllSkillController = getAllSkillController;
