class TagsModel {
    constructor(db) {
        this.db = db;
    }

    async addArticleTags(articleId, tags) {
        if (tags.length === undefined) return [];
        for (let i = 0; i < tags.length; i++) {
            await this.db.query(
                'INSERT INTO article_tags (article_id, tag_name) VALUES ($1, $2);',
                [articleId, tags[i]]
            )
        }
        return tags
    }

    async getArticleTags(articleId) {
        const res = await this.db.query(
            'SELECT tag_name FROM article_tags WHERE article_id = $1',
            [articleId]
        )
        return res.rows.map(x => x.tag_name)
    }

    async getPopulatArticleTags() {
        // TODO: get popular tags
    }
}

module.exports = (db) => new TagsModel(db)