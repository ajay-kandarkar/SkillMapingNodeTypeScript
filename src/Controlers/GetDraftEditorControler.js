"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDraftEditorControler = void 0;
const GetCountryService_1 = require("../Services/GetCountryService");
const getDraftEditorControler = async (req, res) => {
    try {
        const allUsers = await (0, GetCountryService_1.getAllCountry)();
        res.json(allUsers);
    }
    catch (error) {
        res.status(500).send('Internal Server Error');
    }
};
exports.getDraftEditorControler = getDraftEditorControler;
