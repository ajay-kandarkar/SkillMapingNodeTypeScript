"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLoginUserByIdController = void 0;
const GetUserById_1 = require("../Services/GetUserById");
const getLoginUserByIdController = async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    try {
        const user = await (0, GetUserById_1.GetLoginUserServiceById)(userId);
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.getLoginUserByIdController = getLoginUserByIdController;
