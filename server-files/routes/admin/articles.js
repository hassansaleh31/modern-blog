const articlesModel = require('../../models/articles')

class AdminArticlesRoute {
    constructor(db) {
        this.router = require('express').Router();
        this.articlesModel = articlesModel(db);
        this.configure();
    }

    configure() {
        this.router.put('/', (req, res) => {
            this.articlesModel.addArticle(req.body, req.user.username)
                .then(article => res.json({ success: true, body: article }))
                .catch(e => {
                    console.error(e)
                    res.json({ success: false, msg: e.message })
                })
        })

        this.router.delete('/:id', (req, res) => {
            this.articlesModel.deleteArticle(req.params.id)
                .then(body => res.json({ success: true, body }))
                .catch(e => {
                    console.error(e)
                    res.json({ success: false, msg: e.message })
                })
        })
    }
}

module.exports = (db) => new AdminArticlesRoute(db).router