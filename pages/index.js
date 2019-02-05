import Layout from '../components/MyLayout.js'
import HomeLatestPost from '../components/HomeLatestPost'
import PostList from '../components/PostList'
import Posts from '../models/posts'
import Head from 'next/head'

const Index = (props) => (
    <Layout>
        <Head>
            <title>Hassan Saleh's Blog</title>
            <meta name="description" content="Test description"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <div style={{ padding: '1em' }}>
            <HomeLatestPost post={props.posts[0]} />
            <h2 style={{ borderBottom: '1px solid #cecece' }}>Latest Posts</h2>
            <PostList posts={props.posts.slice(1)} />
        </div>
        <div>
            Side
        </div>
    </Layout>
)

Index.getInitialProps = async () => {
    const data = await Posts.getPosts()
    return {
        posts: data
    }
}

export default Index