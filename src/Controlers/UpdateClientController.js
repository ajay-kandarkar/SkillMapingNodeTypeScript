"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClientController = void 0;
const updateClientService_1 = require("../Services/updateClientService");
const updateClientController = async (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    const updatedData = req.body;
    try {
        await (0, updateClientService_1.updateClientById)(userId, updatedData);
        res.json({ success: true, message: 'Client updated successfully.' });
    }
    catch (error) {
        res.status(500).json({ message: 'Internal Server Error.' });
    }
};
exports.updateClientController = updateClientController;
