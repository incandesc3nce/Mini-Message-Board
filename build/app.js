"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const indexRouter_1 = __importDefault(require("./routes/indexRouter"));
const messageRouter_1 = __importDefault(require("./routes/messageRouter"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/', indexRouter_1.default);
app.use('/new', messageRouter_1.default);
app.get('*', function (req, res) {
    res.status(404).send('Could not find requested page');
});
app.set('views', path_1.default.join(__dirname, "views"));
app.set('view engine', 'ejs');
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || 'localhost';
app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}.`);
});
