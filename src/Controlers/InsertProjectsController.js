"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertProjectController = void 0;
const InsertProjectService_1 = require("../Services/InsertProjectService");
const insertProjectController = async (req, res) => {
    try {
        const { project_name, description, status, skill_name, client_name } = req.body;
        if (!project_name || !description || !status || !skill_name || !client_name) {
            res.status(400).json({ error: 'Incomplete user information provided' });
            return;
        }
        const newProjects = {
            project_name,
            description,
            status,
            skill_name,
            client_name,
        };
        const userId = await (0, InsertProjectService_1.insertProjectService)(newProjects);
        if (userId !== null) {
            res.json(Object.assign({ id: userId, message: 'Project Added Succesfully' }, newProjects));
        }
        else {
            res.status(500).send({ error: 'This project is already present' });
        }
    }
    catch (error) {
        res.status(500).send('Internal Server Error');
    }
};
exports.insertProjectController = insertProjectController;
