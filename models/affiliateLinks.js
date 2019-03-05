import api from './apiModel';

class AffiliateLinksModel {
    async getLinks() {
        const res = await api.get('/affiliate/links');
        return res;
    }

    async getSideLinks() {
        const res = await api.get('/affiliate/side');
        return res;
    }
}

export default new AffiliateLinksModel()