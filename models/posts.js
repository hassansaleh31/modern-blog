import fetch from 'isomorphic-unfetch';

class PostsMethods {
    async getPosts() {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/api/articles')
                .then(res => res.json())
                .then(res => resolve(res))
                .catch(e => reject(e))
        })
    }

    async getPost(id) {
        return new Promise((resolve, reject) => {
            fetch(`http://localhost:3000/api/articles/${id}`)
                .then(res => res.json())
                .then(res => resolve(res))
                .catch(e => reject(e))
        })
    }

    async getRelated(id) {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/api/articles/popular')
                .then(res => res.json())
                .then(res => resolve(res.body.articles))
                .catch(e => reject(e))
        })
    }

    async getPopular() {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/api/articles/popular')
                .then(res => res.json())
                .then(res => resolve(res.body.articles))
                .catch(e => reject(e))
        })
    }

    deletePost(id) {
        blogPosts = blogPosts.filter(post => post != id)
        return true;
    }
}

export default new PostsMethods()