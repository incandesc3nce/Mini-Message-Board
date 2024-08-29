"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
};
const formatDate = (date, locale) => {
    return new Intl.DateTimeFormat(locale, options).format(date);
};
exports.default = formatDate;
