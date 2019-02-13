const articlesModel = require('../models/articles')

class ArticlesRoute {
    constructor(db) {
        this.router = require('express').Router();
        this.articlesModel = articlesModel(db);
        this.configure();
    }

    configure() {
        this.router.get('/', (req, res) => {
            this.articlesModel.getArticles(req.query)
                .then(articles => res.json({ success: true, articles }))
                .catch(e => {
                    console.error(e)
                    res.sendStatus(500)
                })
        })

        this.router.get('/:id', (req, res) => {
            this.articlesModel.getArticle(req.params.id)
                .then(article => article ? res.json({ success: true, article }) : res.sendStatus(404))
                .catch(e => {
                    console.error(e)
                    res.sendStatus(500)
                })
        })
    }
}

module.exports = (db) => new ArticlesRoute(db).router