import Header from '../components/Header';
import Footer from '../components/Footer';
import Posts from '../models/posts'
import PostList from '../components/PostList';
import Head from 'next/head';

const About = ({ popular }) => (
    <div>
        <Head>
            <title>Hassan Saleh</title>
            <meta name="description" content="Full stack web developer from Tyre, Lebanon. I create websites, web apps and mobile apps. I also manage servers and databases."></meta>
            <link rel="canonical" href="https://hassansaleh.info/about" />
        </Head>
        <Header />
        <main>
            <div style={{ padding: '1em', maxWidth: '1135px', margin: 'auto' }}>
                <h1>Hey, my name is Hassan Saleh.</h1>
                <h2>I'm a frontend engineering team leader from Tyre, Lebanon.</h2>
                <p>I design, build and maintain full-stack web applications.</p>
                <p>Have a project you'd like to discuss?</p>
                <p>Lets chat at <a href="mailto:hassansaleh31@gmail.com">hassansaleh31@gmail.com</a></p>

                <h2>Some of my work</h2>

                <h3>Press News</h3>
                <p>Designed, built and deployed the website for <a href="https://pressnewsnow.com">Press News</a>.</p>
                <p>Used PEAN Stack (Postgres Express Angular Node) to create the project.</p>
                <p>The project features a postgres database, nodejs server, the frontend and an admin panel.</p>
                <p>Deployments are automatically managed by a CI/CD workflow using google cloud build, cloud source repositories and app engine.</p>

                <h3>My Blog</h3>
                <p>Designed, built and deployed this website.</p>
                <p>Used Next.js to create a server-side rendered react application.</p>
                <p>Used Postgres as my database and Express as my Node server.</p>
                <p>Deployments are automatically managed by a CI/CD workflow using google cloud build, cloud source repositories and app engine.</p>
                <p>The sorce code for this website is available on <a href="https://github.com/hassansaleh31/modern-blog">Github</a>.</p>

                <h3>OZMsocial</h3>
                <p>
                    Worked on the backend development of the <a href="https://www.ozmsocial.com/">OZMsocial</a> mobile application.
                We used LAMP stack to build a backend for a social network.</p>
                <p>
                    I designed the SQL tables for many features from scratch, and wrote complex queries to deliver the right data to the user.</p>
                <p>
                    The app can be found on the Play Store and the Appstore by the name <a href="https://www.ozmsocial.com/">OZMsocial</a>.
                </p>

                <h2>My Top Articles:</h2>
                <PostList posts={popular} />
            </div>
        </main>
        <Footer />
    </div>
)

About.getInitialProps = async () => {
    const popular = await Posts.getPopular();
    return { popular: popular.articles }
}

export default About