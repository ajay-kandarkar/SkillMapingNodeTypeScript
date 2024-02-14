"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProjectControler = void 0;
const AddProjectService_1 = require("../Services/AddProjectService");
const addProjectControler = async (req, res) => {
    try {
        const { project_name, description, status, skill_id, client_id, registration_id, draft_editor_content } = req.body;
        if (!project_name || !description || !status || !skill_id || !client_id) {
            res.status(400).json({ error: 'Incomplete Project  information provided' });
            return;
        }
        else {
            const project = {
                project_name,
                description,
                status,
                skill_id,
                client_id,
                registration_id,
                draft_editor_content
            };
            await (0, AddProjectService_1.addProject)(project);
            res.status(200).json({ message: "project  add sucesfully" });
        }
    }
    catch (error) {
        res.status(500).send('Internal Server Error');
    }
};
exports.addProjectControler = addProjectControler;
