"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require("./db/config");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('tiny'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//application/x-www-form-urlencoded
app.use(express_1.default.urlencoded({ extended: true }));
//MIDDLEWARES ROUTES
app.use(routes_1.default);
app.use(express_1.default.static('public'));
const history = require('connect-history-api-fallback');
app.use(history());
// connection database
app.listen(process.env.PORT || 3000, () => {
    console.log(`Listen on port ${process.env.PORT}`);
});
