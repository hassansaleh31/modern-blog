import Layout from '../components/MyLayout.js'
import PostLink from '../components/PostLink'
import Posts from '../models/posts'

const Index = (props) => (
    <Layout>
        <h1>Blog Posts</h1>
        <ul>
            {
                props.posts.map((post) => (
                    <PostLink key={post.id} post={post} />
                ))
            }
        </ul>
    </Layout>
)

Index.getInitialProps = async () => {
    const data = await Posts.getPosts()
    return {
        posts: data
    }
}

export default Index