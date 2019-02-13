const { Pool } = require('pg');
const bcrypt = require('bcrypt');

const pool = new Pool()

class MyDb {
    constructor() { }

    query(text, params) {
        return pool.query(text, params);
    }

    async createTables() {
        await this.query(
            `
                DO $$ BEGIN
                    CREATE TYPE admin_role AS ENUM ('god', 'editor', 'viewer');
                EXCEPTION
                    WHEN duplicate_object THEN null;
                END $$;
                CREATE TABLE IF NOT EXISTS admins(
                    username VARCHAR(30) PRIMARY KEY NOT NULL,
                    password VARCHAR(255) NOT NULL,
                    name VARCHAR(50) NOT NULL,
                    role admin_role NOT NULL DEFAULT 'viewer'
                );
                CREATE TABLE IF NOT EXISTS articles(
                    article_id SERIAL PRIMARY KEY,
                    author VARCHAR(30) REFERENCES admins(username) ON UPDATE CASCADE ON DELETE CASCADE NOT NULL,
                    title VARCHAR(70) NOT NULL,
                    description VARCHAR(255) NOT NULL,
                    body TEXT NOT NULL,
                    created_at timestamp NOT NULL DEFAULT NOW(),
                    image VARCHAR(60) NOT NULL
                );
                CREATE TABLE IF NOT EXISTS article_views(
                    view_id SERIAL PRIMARY KEY,
                    article_id INT REFERENCES articles(article_id) ON UPDATE CASCADE ON DELETE CASCADE NOT NULL,
                    view_date timestamp NOT NULL DEFAULT NOW(),
                    view_ip VARCHAR(20)
                );
                CREATE TABLE IF NOT EXISTS article_tags(
                    article_id INT REFERENCES articles(article_id) ON UPDATE CASCADE ON DELETE CASCADE NOT NULL,
                    tag_name varchar(20) NOT NULL
                );
            `,
            []
        );
        const tablesExist = true
        const adminExists = await this.createGodUser()
        return { tablesExist, adminExists }
    }

    async createGodUser() {
        const username = process.env.GOD_USERNAME;
        const name = process.env.GOD_USER_NAME;
        const password = process.env.GOD_PASSWORD;
        if (!username || !name || !password) {
            throw new Error('Could not find environment variables for God user credentials');
        }
        const res = await this.query(
            'SELECT username FROM admins WHERE username = $1;',
            [username]
        )
        if (res.rowCount > 0) return true;
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)
        const insertRes = await this.query(
            'INSERT INTO admins (username, name, password, role) VALUES ($1, $2, $3, $4) RETURNING *;',
            [username, name, hashedPassword, 'god']
        );
        return insertRes.rowCount > 0;
    }
}

module.exports = new MyDb();