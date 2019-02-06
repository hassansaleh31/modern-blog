let blogPosts = [
    {
        id: 1,
        title: 'Hello world 1',
        body: 'This is blog post 1',
        date: new Date('2019-02-06'),
        author: 'Hussam Saleh',
        category: 'Design',
        tags: ['react', 'css'],
        image: 'https://picsum.photos/300?random',
        view: 1573,
        likes: 56,
        comments: 12,
        previous: null,
        next: 2
    },
    {
        id: 2,
        title: 'Hello world 2',
        body: 'This is blog post 2',
        date: new Date('2019-02-06T11:21:23.597Z'),
        author: 'Hassan Saleh',
        category: 'Design',
        tags: ['react', 'css'],
        image: 'https://picsum.photos/300/300',
        view: 1573,
        likes: 56,
        comments: 12,
        previous: 1,
        next: 3
    },
    {
        id: 3,
        title: 'Hello world 3',
        body: 'This is blog post 3',
        date: new Date('2019-02-06T11:21:23.597Z'),
        author: 'Hussam Saleh',
        category: 'Design',
        tags: ['react', 'css'],
        image: 'https://picsum.photos/300/300',
        view: 1573,
        likes: 56,
        comments: 12,
        previous: 2,
        next: 4
    },
    {
        id: 4,
        title: 'Hello world 4',
        body: 'This is blog post 4',
        date: new Date('2019-02-06T11:21:23.597Z'),
        author: 'Hassan Saleh',
        category: 'Design',
        tags: ['react', 'css'],
        image: 'https://picsum.photos/300/300',
        view: 1573,
        likes: 56,
        comments: 12,
        previous: 3,
        next: 5
    },
    {
        id: 5,
        title: 'Hello world 5',
        body: 'This is blog post 5',
        date: new Date('2019-02-06T11:21:23.597Z'),
        author: 'Hussam Saleh',
        category: 'Design',
        tags: ['react', 'css'],
        image: 'https://picsum.photos/300/300',
        view: 1573,
        likes: 56,
        comments: 12,
        previous: 4,
        next: null
    }
]

class PostsMethods {
    getPosts() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(blogPosts)
            }, 2000);
        })
    }

    getPost(id) {
        return new Promise(resolve => {
            const post = blogPosts.find(post => post.id == id)
            setTimeout(() => {
                resolve(post)
            }, 2000);
        })
    }

    deletePost(id) {
        blogPosts = blogPosts.filter(post => post != id)
        return true;
    }
}

export default new PostsMethods()