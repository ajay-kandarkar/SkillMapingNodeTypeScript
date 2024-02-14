"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletClient = void 0;
const DeleteClientService_1 = require("../Services/DeleteClientService");
const deletClient = async (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    try {
        await (0, DeleteClientService_1.deleteClient)(userId);
        res.status(200).json({ message: 'Client deleted' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.deletClient = deletClient;
