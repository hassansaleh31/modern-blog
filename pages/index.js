import Layout from '../components/MyLayout.js'
import HomeLatestPost from '../components/HomeLatestPost'
import PostList from '../components/PostList'
import SideContent from '../components/SideContent'
import Posts from '../models/posts'
import Head from 'next/head'

const Index = (props) => (
    <Layout>
        <Head>
            <title>Hassan Saleh's Blog</title>
            <meta name="description" content="Full stack web development blog"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        {
            props.body.articles.length > 0
                ? (
                    <div style={{ padding: '1em' }}>
                        <HomeLatestPost post={props.body.articles[0]} />
                        <h2 style={{ borderBottom: '1px solid #cecece' }}>Latest Posts</h2>
                        {
                            props.body.articles.length > 1
                                ? <PostList posts={props.body.articles.slice(1)} />
                                : <h3>No more posts</h3>
                        }
                    </div>
                )
                : <h2>There are no articles to show</h2>
        }
        <div style={{ padding: '1em' }}>
            <SideContent popular={[]} />
        </div>
    </Layout>
)

Index.getInitialProps = async () => {
    const data = await Posts.getPosts()
    return data
}

export default Index