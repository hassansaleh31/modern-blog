const start = Date.now();
const express = require('express')
const next = require('next')
const path = require('path')

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
    // TODO: do we need sessions?
    // server.use(passport.session());
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

    server.get('/favicon.ico', (req, res) => {
        res.sendFile(path.join(process.cwd(), 'static/favicon.ico'))
    })

    server.get('/ads.txt', (req, res) => {
        res.sendFile(path.join(process.cwd(), 'static/ads.txt'))
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    const port = process.env.PORT || 3000

    server.listen(port, (err) => {
        if (err) {
            console.error(e)
            process.exit(1)
        }
        console.log(`> Ready on http://localhost:${port}`)
        const end = Date.now();
        console.log(`Startup time: ${end - start} ms`);
    })
}

init()
    .then(() => { })
    .catch((ex) => {
        console.error(ex)
        process.exit(1)
    })