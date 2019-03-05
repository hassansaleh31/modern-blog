const affiliateLinksModel = require('../models/affiliateLinks');

class AffiliateLinksRoute {

    constructor(db) {
        this.router = require('express').Router();
        this.affiliateLinksModel = affiliateLinksModel(db);
        this.configure();
    }

    configure() {
        this.router.get('/', (req, res) => {
            this.affiliateLinksModel.getLinks(req.query)
                .then(links => res.json({ success: true, body: links }))
                .catch(e => {
                    res.sendStatus(500)
                    console.error(e)
                })
        })

        this.router.get('/side', (req, res) => {
            this.affiliateLinksModel.getSideLinks()
                .then(links => res.json({ success: true, body: links }))
                .catch(e => {
                    res.sendStatus(500)
                    console.error(e)
                })
        })
    }

}

module.exports = (db) => new AffiliateLinksRoute(db).router;