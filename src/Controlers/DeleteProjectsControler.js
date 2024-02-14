"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClientByIdController = void 0;
const DeleteProjectsService_1 = require("../Services/DeleteProjectsService");
const deleteClientByIdController = async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    try {
        await (0, DeleteProjectsService_1.deleteClientbyId)(userId);
        res.status(200).json({ message: 'user deleted' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.deleteClientByIdController = deleteClientByIdController;
