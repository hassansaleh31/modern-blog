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
                <h2>I'm a full stack web developer from Tyre, Lebanon.</h2>
                <p>I design, build and maintain full-stack web applications.</p>
                <p>Have a project you'd like to discuss?</p>
                <p>Lets chat at <a href="mailto:hassansaleh31@gmail.com">hassansaleh31@gmail.com</a></p>
                <h2>Some of my work</h2>
                <h3>Press News</h3>
                <p>I designed, built and deployed the website for <a href="https://pressnewsnow.com">Press News</a>.</p>
                <p>I used PEAN Stack (Postgres Express Angular Node) built from the ground up by me.</p>
                <p>I used docker to create a compose file that connect and run a postgres database, nodejs server, the frontend and an admin panel.</p>
                <p>Deployed to Digital Ocean behind a load balancer.</p>
                <h3>My Blog</h3>
                <p>I designed, built and deployed this website.</p>
                <p>I used Next.js to create a server-side rendered react application.</p>
                <p>I used Postgres as my database and Express as my Node server.</p>
                <p>I used docker to create a compose file that connect and run a postgres database and nodejs server that serves both the static files and the API.</p>
                <p>Deployed to a Digital Ocean droplet running linux and an Nginx server.</p>
                <p>The sorce code for this website is available on <a href="https://github.com/hassansaleh31/modern-blog">Github</a>.</p>
                <h3>OZMsocial</h3>
                <p>I helped in the backend development of <a href="https://www.ozmsocial.com/">OZMsocial</a>.</p>
                <p>We used LAMP Stack for developing the backend for a social network mobile application based in Lebanon.</p>
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