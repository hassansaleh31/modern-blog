let blogPosts = [
    {
        id: 1,
        title: 'Hello world 1',
        body: 'This is blog post 1',
        date: new Date(),
        author: 'Hussam Saleh',
        category: 'Design',
        image: 'https://picsum.photos/300?random'
    },
    {
        id: 2,
        title: 'Hello world 2',
        body: 'This is blog post 2',
        date: new Date(),
        author: 'Hassan Saleh',
        category: 'Design',
        image: 'https://picsum.photos/300/300'
    },
    {
        id: 3,
        title: 'Hello world 3',
        body: 'This is blog post 3',
        date: new Date(),
        author: 'Hussam Saleh',
        category: 'Design',
        image: 'https://picsum.photos/300/300'
    },
    {
        id: 4,
        title: 'Hello world 4',
        body: 'This is blog post 4',
        date: new Date(),
        author: 'Hassan Saleh',
        category: 'Design',
        image: 'https://picsum.photos/300/300'
    },
    {
        id: 5,
        title: 'Hello world 5',
        body: 'This is blog post 5',
        date: new Date(),
        author: 'Hussam Saleh',
        category: 'Design',
        image: 'https://picsum.photos/300/300'
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