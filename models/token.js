const db = require('./connection')

module.exports = {
    create: async (userId, token) => {
        let sqlScript = `INSERT INTO tokens (userId, token) VALUES (${userId}, ${token})`;
        return db.query(sqlScript);
    },

    findOne: async (userId) => {
        let sqlScript = `SELECT  FROM tokens WHERE userId = ${userId}`;
        return db.query(sqlScript, (err, res) => {
            return res.rows[0];
        });
    },

    findOneByToken: async (token) => {
        let sqlScript = `SELECT * FROM tokens WHERE token = ${token}`;
        return db.query(sqlScript, (err, res) => {
            return res.rows[0];
        });
    },

    delete: async (token) => {
        let sqlScript = `DELETE FROM tokens WHERE token = ${token}`;
        return db.query(sqlScript);
    },
}