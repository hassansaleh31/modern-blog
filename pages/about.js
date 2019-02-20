import Layout from '../components/MyLayout';
import Posts from '../models/posts'
import PostList from '../components/PostList';
import Head from 'next/head';

const About = ({ popular }) => (
    <Layout>
        <Head>
            <title>Hassan Saleh</title>
            <meta name="description" content="Full stack web developer from Tyre, Lebanon"></meta>
        </Head>
        <div style={{ padding: '1em' }}>
            <h2>Hey, my name is Hassan Saleh.</h2>
            <h2>I'm a full stack web developer from Tyre, Lebanon.</h2>
            <p>I design, build and maintain full-stack web applications.</p>
            <p>Have a project you'd like to discuss?</p>
            <p>Lets chat at <a href="mailto:hassansaleh31@gmail.com">hassansaleh31@gmail.com</a></p>
            <h3>My Top Articles:</h3>
            <PostList posts={popular} />
        </div>
        <div></div>
    </Layout>
)

About.getInitialProps = async () => {
    const popular = await Posts.getPopular();
    return { popular: popular.articles }
}

export default About