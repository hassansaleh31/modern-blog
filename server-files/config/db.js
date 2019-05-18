const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
    ssl: {
        ca: fs.readFileSync(path.join(process.cwd(), 'ca-certificate.crt')).toString()
    }
})

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
                DO $$ BEGIN
                    CREATE TYPE link_type AS ENUM ('text', 'square', 'horizantal', 'vertical');
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
                    view_ip VARCHAR(39)
                );
                CREATE TABLE IF NOT EXISTS article_tags(
                    article_id INT REFERENCES articles(article_id) ON UPDATE CASCADE ON DELETE CASCADE NOT NULL,
                    tag_name varchar(20) NOT NULL
                );
                CREATE TABLE IF NOT EXISTS affiliate_links(
                    affiliate_link_id SERIAL PRIMARY KEY,
                    affiliate_link_html TEXT NOT NULL,
                    affiliate_link_type link_type NOT NULL DEFAULT 'text',
                    added_at timestamp NOT NULL DEFAULT NOW(),
                    is_active BOOLEAN NOT NULL DEFAULT FALSE
                );
                CREATE TABLE IF NOT EXISTS affiliate_link_views(
                    view_id SERIAL PRIMARY KEY,
                    affiliate_link_id INT REFERENCES affiliate_links(affiliate_link_id) ON UPDATE CASCADE ON DELETE CASCADE NOT NULL,
                    view_date timestamp NOT NULL DEFAULT NOW(),
                    view_ip VARCHAR(39)
                );
            `,
            []
        );
        const tablesExist = true
        const adminExists = await this.createGodUser()
        await this.upgradeTables()
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

    async upgradeTables() {
        let query = await this.query(
            `select column_name
            from information_schema.columns 
            where table_name = 'affiliate_links';`,
            []
        )
        if (query.rowCount > 0 && query.rows.filter(x => x['column_name'] === 'affiliate_link_type').length === 0) {
            console.log('Adding column affiliate_link_type to table affiliate_links')
            await this.query(
                `ALTER TABLE affiliate_links ADD affiliate_link_type link_type NOT NULL DEFAULT 'text'`,
                []
            )
            console.log('Added column affiliate_link_type to table affiliate_links')
        }
    }
}

module.exports = new MyDb();