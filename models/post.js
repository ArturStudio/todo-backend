const db = require('./connection')

module.exports = {
    create: async (userId, text) => {
        let sqlScript  = `INSERT INTO post (userId, text) VALUES (${userId}, ${text})`;
        return db.query(sqlScript, (err, res) => {
            return res;
        });
    },
    edit: async (post) => {
        let sqlScript  = `UPDATE posts SET text = ${test} WHERE id = ${post.id}`;
        return db.query(sqlScript, (err, res) => {
            return res;
        });
    },
    get: async () => {
        let sqlScript  = `SELECT * FROM posts`;
        return db.query(sqlScript, (err, res) => {
            return res.rows;
        });
    },
    getOne: async (id) => {
        let sqlScript  = `SELECT * FROM posts WHERE id = ${id}`;
        return db.query(sqlScript, (err, res) => {
            return res.rows[0];
        });
    },

}