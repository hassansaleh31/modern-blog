import api from './apiModel';

class AffiliateLinksModel {
    async getLinks() {
        const res = await api.get('/affiliate/');
        return res;
    }

    async getSideLinks() {
        const res = await api.get('/affiliate/side');
        return res;
    }

    async getHorizontalLinks(count = 5, page = 0) {
        const res = await api.get(`/affiliate/horizontal?count=${count}&page=${page}`);
        return res;
    }

    async getSquareLinks(count = 5, page = 0) {
        const res = await api.get(`/affiliate/square?count=${count}&page=${page}`);
        return res;
    }
}

export default new AffiliateLinksModel()