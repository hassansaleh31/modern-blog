class ArticlesModule {
    constructor(db) {
        this.db = db;
    }


    async getArticles(params) {
        const res = await this.db.query(
            'SELECT * FROM articles ORDER BY article_id DESC LIMIT $1 OFFSET $2;',
            [(params.count || 50), (params.count || 50) * (params.page || 0)]
        );
        return res.rows
    }

    async getArticle(id) {
        const res = await this.db.query(
            'SELECT * FROM articles WHERE article_id = $1;',
            [id]
        );
        return res.rowCount > 0 ? res.rows[0] : null
    }
}

module.exports = (db) => new ArticlesModule(db)