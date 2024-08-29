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
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const pg_1 = require("pg");
const SQL = `
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR(500) NOT NULL,
    username VARCHAR(255) NOT NULL,
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    
    INSERT INTO messages (text, username) VALUES 
    ('Hey, let''s go bowling!', 'Roman Bellic'),
    ('Of all sad words of tongue or pen, the saddest are these, "It might have been."', 'John Greenleaf Whittier'),
    ('In the end, we only regret the chances we didn''t take.', 'Lewis Carroll'),
    ('Our doubts are traitors and make us lose the good we oft might win, by fearing to attempt.', 'William Shakespeare, Measure for Measure')
    `;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('seeding...');
        const client = new pg_1.Client({
            connectionString: process.env.DB_URL,
        });
        yield client.connect();
        yield client.query(SQL);
        yield client.end();
        console.log('done.');
    });
}
main();
