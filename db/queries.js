const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(messageText, messageUser) {
    const query = `
    INSERT INTO messages (text, name, added)
    VALUES ($1, $2, NOW())
  `;

  await pool.query(query, [messageText, messageUser]);
}

async function getMessage(id) {
    console.log("ID passed to getMessage:", id);
    const result = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
    return result.rows[0] ;
  }

module.exports = {
  getAllMessages,
  insertMessage,
  getMessage
};
