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
            props.latest.length > 0
                ? (
                    <div style={{ padding: '1em' }}>
                        <HomeLatestPost post={props.latest[0]} />
                        <h2 style={{ borderBottom: '1px solid #cecece' }}>Latest Posts</h2>
                        {
                            props.latest.length > 1
                                ? <PostList posts={props.latest.slice(1)} />
                                : <h3>No more posts</h3>
                        }
                    </div>
                )
                : <h2>There are no articles to show</h2>
        }
        <div style={{ padding: '1em' }}>
            <SideContent popular={props.popular} />
        </div>
    </Layout>
)

Index.getInitialProps = async () => {
    const latest = await Posts.getPosts()
    const popular = await Posts.getPopular()
    return { latest: latest.articles, popular: popular.articles }
}

export default Index