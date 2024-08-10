import 'dotenv/config';
import { Client } from 'pg';

const SQL:string = `
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

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: process.env.DB_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done.');
}

main();
