"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectControllerById = void 0;
const UpdateProjectService_1 = require("../Services/UpdateProjectService");
const updateProjectControllerById = async (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    const updatedData = req.body;
    try {
        await (0, UpdateProjectService_1.updateProjectById)(userId, updatedData);
        res.json({ success: true, message: 'Project updated successfully.' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error.' });
    }
};
exports.updateProjectControllerById = updateProjectControllerById;
