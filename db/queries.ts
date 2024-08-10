import pool from './pool';

const getMessages = async () => {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
};

const getMessage = async (id: number) => {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [
    id,
  ]);
  return rows[0];
};

const addMessage = async (user: string, text: string) => {
  const { rows } = await pool.query(
    'INSERT INTO messages (user, text) VALUES ($1, $2)',
    [user, text]
  );
  return rows[0];
}

export { getMessages, getMessage, addMessage };
