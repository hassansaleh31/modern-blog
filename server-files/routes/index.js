const passport = require('passport');
const jsonwebtoken = require('jsonwebtoken');

const adminModel = require('../models/admins');

const articleRoutes = require('./articles');
const affiliateLinksRoute = require('./affiliateLinks')
const adminRoute = require('./admin');

class MyRoutes {
    constructor(app, db) {
        this.db = db;
        this.adminModel = adminModel(db);
        this.configure(app);
    }

    configure(app) {
        app.post('/api/authenticate', (req, res) => {
            const username = req.body.username.toLowerCase();
            const password = req.body.password;
            this.authenticate(username, password)
                .then(token => res.json({ success: true, token }))
                .catch(e => {
                    console.error(e.message);
                    res.json({ success: false, msg: e.message });
                });
        });

        // Admin routes with authentication
        app.use('/api/admin', passport.authenticate('jwt', { session: false }), adminRoute(this.db));

        // public routes
        app.use('/api/articles', articleRoutes(this.db));
        app.use('/api/affiliate/links', affiliateLinksRoute(this.db));
    }

    async authenticate(username, password) {
        if (!username) { throw new Error('Username is missing from request'); }
        if (!password) { throw new Error('Password is missing from request'); }
        const user = await this.adminModel.authenticateAdmin(username, password);
        if (!user) { throw new Error('Wrong username or password'); }
        delete user.password;
        const token = jsonwebtoken.sign(user, process.env.TOKEN_SECRET, { expiresIn: 60 * 60 * 24 });
        return `JWT ${token}`;
    }
}

module.exports = (app, db) => new MyRoutes(app, db)