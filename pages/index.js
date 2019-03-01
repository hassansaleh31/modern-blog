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
            <meta name="description" content="A Full stack web development blog made by me Hassan Saleh. I talk about Websites, Web Apps, Mobile Apps, Servers, DevOps and more."></meta>
            <link rel="canonical" href="https://hassansaleh.info" />
        </Head>
        {
            props.latest.length > 0
                ? (
                    <div className="main-content padded-on-mobile">
                        <HomeLatestPost post={props.latest[0]} />
                        <h2 style={{ borderBottom: '1px solid #cecece' }}>Latest Articles</h2>
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