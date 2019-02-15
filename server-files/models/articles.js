const TagsModel = require('./tags');

class ArticlesModule {
    constructor(db) {
        this.db = db;
        this.tagsModel = TagsModel(db);
    }

    async addArticle(article, username) {
        const start = new Date().getTime();
        const res = await this.db.query(
            'INSERT INTO articles (author, title, description, body, image) VALUES ($1, $2, $3, $4, $5) RETURNING *;',
            [username, article.title, article.description, article.body, article.image]
        );
        if ((res.rowCount === 0 || res.rows[0].article_id === undefined)) {
            throw new Error('Failed to add article');
        }
        const newArticle = res.rows[0];
        newArticle.tags = await this.tagsModel.addArticleTags(newArticle.article_id, article.tags);
        const end = new Date().getTime();
        return {
            article: newArticle,
            excutionTime: `${end - start} ms`
        }
    }

    async deleteArticle(article_id) {
        const start = new Date().getTime();
        await this.db.query(
            'DELETE FROM articles WHERE article_id = $1',
            [article_id]
        );
        const end = new Date().getTime();
        return {
            excutionTime: `${end - start} ms`
        }
    }

    async getArticles(params) {
        const count = Number(params.count || 50);
        const page = Number(params.page || 0);
        const start = new Date().getTime();
        const res = await this.db.query(
            `
                SELECT
                articles.article_id,
                articles.author,
                articles.title,
                articles.description,
                articles.created_at,
                articles.image,
                COUNT(article_views.view_id) AS views
                FROM articles LEFT JOIN article_views USING (article_id)
                GROUP BY articles.article_id
                ORDER BY articles.article_id DESC LIMIT $1 OFFSET $2;
            `,
            [count, count * page]
        );
        const total = await this.getArticlesCount();
        const end = new Date().getTime();
        return {
            articles: res.rows,
            total,
            count: res.rowCount,
            limit: count,
            page,
            excutionTime: `${end - start} ms`
        }
    }

    async getPopularArticles(params) {
        const count = Number(params.count || 8);
        const start = new Date().getTime();
        const res = await this.db.query(
            `
                SELECT
                articles.article_id,
                articles.author,
                articles.title,
                articles.description,
                articles.created_at,
                articles.image,
                COUNT(article_views.view_id) AS views
                FROM articles LEFT JOIN article_views USING (article_id)
                GROUP BY articles.article_id
                ORDER BY views DESC LIMIT $1;
            `,
            [count]
        );
        const end = new Date().getTime();
        return {
            articles: res.rows,
            count: res.rowCount,
            excutionTime: `${end - start} ms`
        }
    }

    // async getRelatedArticles(tags) {

    // }

    async getArticlesCount() {
        const res = await this.db.query(
            'SELECT COUNT(article_id) AS total FROM articles',
            []
        )
        return Number(res.rows[0].total || 0)
    }

    async getArticle(id) {
        const start = new Date().getTime();
        const res = await this.db.query(
            `
                SELECT articles.*, COUNT(article_views.view_id) AS views FROM
                articles LEFT JOIN article_views USING (article_id)
                WHERE article_id = $1
                GROUP BY articles.article_id;
            `,
            [id]
        );
        const article = { ...res.rows[0] }
        article.tags = await this.tagsModel.getArticleTags(id);
        const end = new Date().getTime();
        return {
            article,
            excutionTime: `${end - start} ms`
        }
    }
}

module.exports = (db) => new ArticlesModule(db)