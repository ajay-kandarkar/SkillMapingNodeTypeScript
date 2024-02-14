"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSkillController = void 0;
const AddSkillService_1 = require("../Services/AddSkillService");
const addSkillController = async (req, res) => {
    try {
        const { name, description } = req.body;
        if (!name || !description) {
            res.status(400).json({ error: 'Incomplete skill information provided' });
            return;
        }
        const skill = {
            name: name,
            description: description
        };
        const result = await (0, AddSkillService_1.addSkill)(skill);
        if (typeof result === 'string') {
            res.status(400).json({ error: result });
            return;
        }
        res.status(200).json({ message: 'Skill added successfully' });
    }
    catch (error) {
        console.error('Error adding skill:', error);
        res.status(500).send('Internal Server Error');
    }
};
exports.addSkillController = addSkillController;
