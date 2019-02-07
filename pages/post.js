import Layout from '../components/MyLayout.js'
import Posts from '../models/posts'
import MarkdownText from '../components/MarkdownText'
import Head from 'next/head';

class Page extends React.Component {
    constructor(props) {
        super(props)
        // this.handleClick = this.handleClick.bind(this)
    }

    static async getInitialProps(context) {
        const id = context.query.id
        const post = await Posts.getPost(id)

        return { post }
    }

    // handleClick() {
    //     const id = this.props.post.id
    //     const didDelete = Posts.deletePost(id)
    //     if (didDelete) {
    //         Router.push('/')
    //     }
    // }

    render() {
        return (
            <Layout>
                <Head>
                    <title>{this.props.post.title}</title>
                    <link href="/static/monokai-sublime.css" rel="stylesheet" />
                    <link href="/static/post-page.css" rel="stylesheet" />
                </Head>
                <div style={{ margin: '1em', padding: '1em', backgroundColor: 'white', border: '2px solid #cacaca', borderRadius: '.5em' }}>
                    <h1>{this.props.post.title}</h1>
                    <p>By {this.props.post.author}</p>
                    <p>Posted on {this.props.post.date.toString()}</p>
                    <img src={this.props.post.image} style={{ maxWidth: '100%', boxShadow: '0 0 1em #a7a7a78a' }} />
                    <MarkdownText text={this.props.post.body} />
                </div>
                <div>Side</div>
            </Layout>
        )
    }
}


export default Page