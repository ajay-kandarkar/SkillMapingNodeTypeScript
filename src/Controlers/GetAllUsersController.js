"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsersController = void 0;
const GetAllUserServices_1 = require("../Services/GetAllUserServices");
const getAllUsersController = async (req, res) => {
    try {
        const allUsers = await (0, GetAllUserServices_1.getAllUsers)();
        res.json(allUsers);
    }
    catch (error) {
        res.status(500).send('Internal Server Error');
    }
};
exports.getAllUsersController = getAllUsersController;
