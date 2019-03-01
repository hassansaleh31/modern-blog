import api from './apiModel';

class AffiliateLinksModel {
    async getLinks() {
        const res = await api.get('/affiliate/links');
        return res;
    }
}

export default new AffiliateLinksModel()