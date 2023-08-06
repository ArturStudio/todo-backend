const db = require('./connection')

module.exports = {
    create: async (login, password) => {
        let sqlScript = `INSERT INTO users (login, password) VALUES (${login}, ${password})`
        return db.query(sqlScript, (err, res) => {
            return res;
        });
    },
    getByLogin: async (login) => {
        let sqlScript = `SELECT * FROM users WHERE login = ${login}`
        return db.query(sqlScript, (err, res) => {
            return res.rows[0];
        });
    },

    delete: async (login) => {
        let sqlScript = `DELETE FROM users WHERE login = ${login}`
        return db.query(sqlScript)
    }
}