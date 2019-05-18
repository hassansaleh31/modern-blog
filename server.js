const express = require('express')
const next = require('next')

require('dotenv').config()

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const myDb = require('./server-files/config/db')

const init = async () => {
    await app.prepare()

    const server = express();

    // configure jwt authentication using passport
    server.use(passport.initialize());
    server.use(passport.session());
    server.use(bodyParser.json());
    server.use(cors());
    server.use(compression());
    require('./server-files/config/authentication')(passport, myDb);

    // routes configuration
    require('./server-files/routes')(server, myDb)

    server.get('/p/:id', (req, res) => {
        const actualPage = '/post'
        const queryParams = { id: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(3000, (err) => {
        if (err) {
            console.error(e)
            process.exit(1)
        }
        console.log('> Ready on http://localhost:3000')
    })

    await myDb.createGodUser()
}

init()
    .then(() => { })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })