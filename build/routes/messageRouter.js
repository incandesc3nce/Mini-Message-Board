"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const messageRouter = (0, express_1.Router)();
messageRouter.get('/', (req, res) => {
    res.render('newMessage', { title: 'New message' });
});
exports.default = messageRouter;
