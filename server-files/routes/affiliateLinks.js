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
            this.affiliateLinksModel.getSideLinks(req.query)
                .then(links => res.json({ success: true, body: links }))
                .catch(e => {
                    res.sendStatus(500)
                    console.error(e)
                })
        })

        this.router.get('/horizontal', (req, res) => {
            const ip_address = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            this.affiliateLinksModel.getAffiliateBanner(ip_address, 'horizantal')
                .then(links => res.json({ success: true, body: links }))
                .catch(e => {
                    res.sendStatus(500)
                    console.error(e)
                })
        })

        this.router.get('/square', (req, res) => {
            const ip_address = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            this.affiliateLinksModel.getAffiliateBanner(ip_address)
                .then(links => res.json({ success: true, body: links }))
                .catch(e => {
                    res.sendStatus(500)
                    console.error(e)
                })
        })
    }

}

module.exports = (db) => new AffiliateLinksRoute(db).router;