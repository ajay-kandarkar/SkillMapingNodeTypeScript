"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const UserRoutes_1 = __importDefault(require("./Routes/UserRoutes"));
const cors = require('cors');
const app = (0, express_1.default)();
app.use(cors());
const port = process.env.PORT || 8081;
app.use(body_parser_1.default.json());
app.use('/', UserRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
