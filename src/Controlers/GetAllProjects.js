"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProjectsController = void 0;
const GetAllProjectsService_1 = require("../Services/GetAllProjectsService");
const getAllProjectsController = async (req, res) => {
    try {
        const allProjects = await (0, GetAllProjectsService_1.getAllProjects)();
        console.log("All projects : ", allProjects);
        res.json(allProjects);
    }
    catch (error) {
        res.status(500).send('Internal Server Error');
    }
};
exports.getAllProjectsController = getAllProjectsController;
