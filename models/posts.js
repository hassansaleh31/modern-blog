let blogPosts = [
    {
        id: 1,
        title: 'Hello world 1',
        body: 'This is blog post 1',
        date: '13/05/2018',
        author: 'Hussam Saleh',
        category: 'Design'
    },
    {
        id: 2,
        title: 'Hello world 2',
        body: 'This is blog post 2',
        date: '15/05/2018',
        author: 'Hassan Saleh',
        category: 'Design'
    },
    {
        id: 3,
        title: 'Hello world 3',
        body: 'This is blog post 3',
        date: '01/06/2018',
        author: 'Hussam Saleh',
        category: 'Design'
    },
    {
        id: 4,
        title: 'Hello world 4',
        body: 'This is blog post 4',
        date: '07/06/2018',
        author: 'Hassan Saleh',
        category: 'Design'
    },
    {
        id: 5,
        title: 'Hello world 5',
        body: 'This is blog post 5',
        date: '20/06/2018',
        author: 'Hussam Saleh',
        category: 'Design'
    }
]

class PostsMethods {
    getPosts() {
        return blogPosts
    }

    getPost(id) {
        return blogPosts.find(post => post.id == id)
    }

    deletePost(id) {
        blogPosts = blogPosts.filter(post => post != id)
        return true;
    }
}

export default new PostsMethods()