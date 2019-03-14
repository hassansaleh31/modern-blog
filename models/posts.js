import api from './apiModel';

class PostsMethods {
    async getPosts() {
        const res = await api.get('/articles');
        return res;
    }

    async getPost(id) {
        const res = await api.get(`/articles/${id}`);
        return res;
    }

    async getRelated(id) {
        const res = await api.get(`/articles/related/${id}`);
        return res;
    }

    async getPopular(count = 4) {
        const res = await api.get(`/articles/popular?count=${count}`);
        return res;
    }

    async getByTag(tag) {
        const res = await api.get(`/articles/tag/${tag}`);
        return res;
    }

    async incrementViews(id) {
        const res = await api.post('/articles/view', { id })
        return res
    }
}

export default new PostsMethods()