class AdminRoute {
    constructor(db) {
        this.router = require('express').Router();

        this.configure();
    }

    configure() {
        this.router.get('/profile', (req, res) => {
            res.json({ success: true, user: req.user })
        })
    }
}

module.exports = (db) => new AdminRoute(db).router