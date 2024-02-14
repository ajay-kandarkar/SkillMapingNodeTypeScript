"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllClientController = void 0;
const GetAllClientService_1 = require("../Services/GetAllClientService");
const getAllClientController = async (req, res) => {
    try {
        const allClient = await (0, GetAllClientService_1.getAllClient)();
        res.json(allClient);
    }
    catch (error) {
        res.status(500).send('Internal Server Error');
    }
};
exports.getAllClientController = getAllClientController;
