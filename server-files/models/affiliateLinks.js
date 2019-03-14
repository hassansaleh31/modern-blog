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

    async getAffiliateBanner(ip_address, type = 'square') {
        const start = new Date().getTime();
        const res = await this.db.query(
            `SELECT affiliate_links.*, COUNT(affiliate_link_views.view_id) FROM
            affiliate_links LEFT JOIN affiliate_link_views USING (affiliate_link_id)
            WHERE is_active = $1 AND affiliate_link_type = $2
            GROUP BY affiliate_links.affiliate_link_id
            ORDER BY COUNT(affiliate_link_views.view_id) ASC
            LIMIT 1;`,
            [true, type]
        );
        if (res.rowCount > 0) {
            await this.incrementViews(res.rows[0]['affiliate_link_id'], ip_address)
        }
        const end = new Date().getTime();
        return {
            link: res.rowCount > 0 ? res.rows[0] : null,
            excutionTime: `${end - start} ms`
        };
    }

    // async getHorizontalImages(ip_address) {
    //     const start = new Date().getTime();
    //     const res = await this.db.query(
    //         `SELECT * FROM affiliate_links WHERE is_active = $1 AND affiliate_link_type = $2;`,
    //         [true, 'horizantal']
    //     );
    //     if (res.rowCount > 0) {
    //         await this.incrementViews(res.rows[0]['affiliate_link_id'], ip_address)
    //     }
    //     const end = new Date().getTime();
    //     return {
    //         link: res.rowCount > 0 ? res.rows[0] : null,
    //         excutionTime: `${end - start} ms`
    //     };
    // }

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

    async getActiveHorizonalImagesCount() {
        const res = await this.db.query(
            'SELECT COUNT(affiliate_link_id) AS total FROM affiliate_links WHERE is_active = $1 AND affiliate_link_type = $2;',
            [true, 'horizantal']
        )
        return Number(res.rows[0].total || 0)
    }

    async incrementViews(affiliate_link_id, ip_address) {
        const start = new Date().getTime();
        const res = await this.db.query(
            'INSERT INTO affiliate_link_views (affiliate_link_id, view_ip) VALUES ($1, $2) RETURNING *;',
            [affiliate_link_id, ip_address]
        )
        const end = new Date().getTime();
        return {
            success: (res.rowCount > 0 && res.rows[0].view_id) ? true : false,
            excutionTime: `${end - start} ms`
        }
    }

}

module.exports = (db) => new AffiliateLinks(db)