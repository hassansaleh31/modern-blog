const adminArticlesRoute = require('./admin/articles');

class AdminRoute {
    constructor(db) {
        this.router = require('express').Router();
        this.db = db;
        this.configure();
    }

    configure() {
        this.router.get('/profile', (req, res) => {
            res.json({ success: true, user: req.user })
        })

        this.router.use('/articles', adminArticlesRoute(this.db))
    }
}

module.exports = (db) => new AdminRoute(db).router