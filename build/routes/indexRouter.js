"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const formatDate_1 = __importDefault(require("../helpers/formatDate"));
const exportQueries_1 = require("../db/exportQueries");
const getMessages = () => __awaiter(void 0, void 0, void 0, function* () {
    const messages = yield exportQueries_1.db.getMessages();
    return messages;
});
const getMessage = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const message = yield exportQueries_1.db.getMessage(id);
    return message;
});
const indexRouter = (0, express_1.Router)();
const locale = 'en-US';
indexRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const messages = yield getMessages();
    messages.forEach((m) => {
        const date = new Date(m.added);
        m.added = (0, formatDate_1.default)(date, locale);
    });
    res.render('index', { title: 'MMB - Messages', messages: messages });
}));
indexRouter.get('/messages/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const message = yield getMessage(id);
    message.added = (0, formatDate_1.default)(new Date(message.added), locale);
    if (!message) {
        return res.status(404).send('Message not found');
    }
    res.render('message', { title: 'MMB - Message Detail', message: message });
}));
indexRouter.post('/new', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, text } = req.body;
    if (!username || !text) {
        return res.status(400).send('User and text are required');
    }
    yield exportQueries_1.db.addMessage(username, text);
    res.redirect('/');
}));
exports.default = indexRouter;
