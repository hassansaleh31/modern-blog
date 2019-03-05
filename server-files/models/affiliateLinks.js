class AffiliateLinks {

    constructor(db) {
        this.db = db;
    }

    async getLinks(params) {
        const count = Number(params.count || 50);
        const page = Number(params.page || 0);
        const start = new Date().getTime();
        const res = await this.db.query(
            `SELECT * FROM affiliate_links WHERE is_active = $1 AND affiliate_link_type = $2 LIMIT $3 OFFSET $4;`,
            [true, 'text', count, count * page]
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

    async getSquareImages(params) {
        const count = Number(params.count || 50);
        const page = Number(params.page || 0);
        const start = new Date().getTime();
        const res = await this.db.query(
            `SELECT * FROM affiliate_links WHERE is_active = $1 AND affiliate_link_type = $2 LIMIT $3 OFFSET $4;`,
            [true, 'square', count, count * page]
        );
        const total = await this.getActiveSqaureImagesCount();
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

    async getSideLinks() {
        const start = new Date().getTime();
        const links = await this.getLinks({ count: 5 })
        const image = await this.getSquareImages({ count: 5 })
        const end = new Date().getTime();
        return {
            links: links.links,
            image: image.count > 0 ? image.links[0] : null,
            excutionTime: `${end - start} ms`
        };
    }

    async getActiveLinksCount() {
        const res = await this.db.query(
            'SELECT COUNT(affiliate_link_id) AS total FROM affiliate_links WHERE is_active = $1 AND affiliate_link_type = $2;',
            [true, 'text']
        )
        return Number(res.rows[0].total || 0)
    }

    async getActiveSqaureImagesCount() {
        const res = await this.db.query(
            'SELECT COUNT(affiliate_link_id) AS total FROM affiliate_links WHERE is_active = $1 AND affiliate_link_type = $2;',
            [true, 'square']
        )
        return Number(res.rows[0].total || 0)
    }

}

module.exports = (db) => new AffiliateLinks(db)