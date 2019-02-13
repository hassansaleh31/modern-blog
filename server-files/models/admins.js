const bcrypt = require('bcrypt')

class AdminsModule {
    constructor(db) {
        this.db = db;
    }

    async authenticateAdmin(username, password) {
        const res = await this.db.query(
            'SELECT * FROM admins WHERE username = $1 LIMIT 1;',
            [username]
        )
        if (res.rowCount === 0) {
            return null
        }
        const isPasswordCorrect = await bcrypt.compare(password, res.rows[0].password)
        return isPasswordCorrect ? res.rows[0] : null
    }

    async getAdmin(username) {
        const res = await this.db.query(
            'SELECT username, name, role FROM admins WHERE username = $1 LIMIT 1;',
            [username]
        )
        return res.rowCount === 0 ? null : res.rows[0]
    }

}

module.exports = (db) => new AdminsModule(db)