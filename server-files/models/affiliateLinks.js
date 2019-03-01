class AffiliateLinks {

    constructor(db) {
        this.db = db;
    }

    async getLinks(params) {
        const count = Number(params.count || 50);
        const page = Number(params.page || 0);
        const start = new Date().getTime();
        const res = await this.db.query(
            `SELECT * FROM affiliate_links WHERE is_active = $1 LIMIT $2 OFFSET $3;`,
            [true, count, count * page]
        );
        const total = await this.getActiveLinksCount();
        const end = new Date().getTime();
        return {
            links: res.rows,
            total,
            count: res.rowCount,
            limit: count,
            page,
            excutionTime: `${end - start} ms`
        };
    }

    async getActiveLinksCount() {
        const res = await this.db.query(
            'SELECT COUNT(affiliate_link_id) AS total FROM affiliate_links WHERE is_active = $1;',
            [true]
        )
        return Number(res.rows[0].total || 0)
    }

}

module.exports = (db) => new AffiliateLinks(db)