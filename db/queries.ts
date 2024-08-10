import pool from './pool';

export const getMessages = async () => {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
};

export const getMessage = async (id: string) => {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [
    id,
  ]);
  return rows[0];
};
