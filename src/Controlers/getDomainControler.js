"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDomainControler = void 0;
const GetDomainService_1 = require("../Services/GetDomainService");
const getDomainControler = async (req, res) => {
    try {
        const domain = await (0, GetDomainService_1.getDomain)();
        res.json(domain);
    }
    catch (error) {
        res.status(500).send('Internal Server Error');
    }
};
exports.getDomainControler = getDomainControler;
