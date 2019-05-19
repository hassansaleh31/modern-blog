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
                .then(articles => res.json({ success: true, body: articles }))
                .catch(e => {
                    console.error(e)
                    res.sendStatus(500)
                })
        })

        this.router.get('/popular', (req, res) => {
            this.articlesModel.getPopularArticles(req.query)
                .then(articles => res.json({ success: true, body: articles }))
                .catch(e => {
                    console.error(e)
                    res.sendStatus(500)
                })
        })

        this.router.get('/related/:id', (req, res) => {
            this.articlesModel.getRelatedArticles(req.params.id)
                .then(articles => res.json({ success: true, body: articles }))
                .catch(e => {
                    console.error(e)
                    res.sendStatus(500)
                })
        })

        this.router.post('/view', (req, res) => {
            const article_id = req.body.id;
            const ip_address = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            if (!article_id) return res.json({ success: false, msg: 'Article ID is missing from request' })
            this.articlesModel.incrementViews(article_id, ip_address)
                .then(body => res.json({ success: body.success, body }))
                .catch(e => {
                    console.error(e)
                    res.sendStatus(500)
                })
        })

        this.router.get('/tag/:name', (req, res) => {
            this.articlesModel.getArticlesByTag(req.params.name, req.query)
                .then(body => res.json({ success: true, body }))
                .catch(e => {
                    console.error(e)
                    res.sendStatus(500)
                })
        })

        this.router.get('/:id', (req, res) => {
            this.articlesModel.getArticle(req.params.id)
                .then(article => article.article ? res.json({ success: true, body: article }) : res.sendStatus(404))
                .catch(e => {
                    console.error(e)
                    res.sendStatus(500)
                })
        })
    }
}

module.exports = (db) => new ArticlesRoute(db).router