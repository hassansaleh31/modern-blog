const express = require('express')
const next = require('next')

if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const passport = require('passport');
const bodyParser = require('body-parser');
const myDb = require('./server-files/config/db')

// next js initialization
app.prepare()
    .then(() => {
        const server = express();

        // configure jwt authentication using passport
        server.use(passport.initialize());
        server.use(passport.session());
        server.use(bodyParser.json());
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

        // database initialization
        myDb.createTables()
            .then((dbStatus) => {
                console.log(dbStatus)
                // server initialization
                server.listen(3000, (err) => {
                    if (err) throw err
                    console.log('> Ready on http://localhost:3000')
                })
            })
            .catch(e => {
                console.error(e.stack)
                process.exit(1)
            })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })