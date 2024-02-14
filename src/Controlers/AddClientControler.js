"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addClientControler = void 0;
const AddClientService_1 = require("../Services/AddClientService");
const addClientControler = async (req, res) => {
    try {
        const { name, location, country_id, domain_id } = req.body;
        if (!name || !location || !country_id || !domain_id) {
            res.status(400).json({ error: 'Incomplete clinet information provided' });
            return;
        }
        else {
            const client = {
                name: name,
                location: location,
                country_id: country_id,
                domain_id: domain_id
            };
            await (0, AddClientService_1.addClient)(client);
            res.status(200).json({ message: "Client add sucesfully", client: client });
        }
    }
    catch (error) {
        res.status(500).send('Internal Server Error');
    }
};
exports.addClientControler = addClientControler;
