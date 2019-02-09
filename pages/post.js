import Layout from '../components/MyLayout.js'
import Posts from '../models/posts'
import TagList from '../components/TagList'
import PostList from '../components/PostList'
import MarkdownText from '../components/MarkdownText'
import Head from 'next/head';

class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            relatedPosts: null
        }
        // this.handleClick = this.handleClick.bind(this)
    }

    static async getInitialProps(context) {
        const id = context.query.id
        const post = await Posts.getPost(id)

        return { post }
    }

    componentDidMount() {
        Posts.getRelated(this.props.post.id)
            .then(res => {
                this.setState(() => ({
                    relatedPosts: res
                }))
            })
            .catch(e => {
                console.error(e)
                this.setState(() => ({
                    relatedPosts: []
                }))
            })
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
                    <meta name="description" content={this.props.post.description}></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    {/* <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta> */}
                    <link href="/static/monokai-sublime.css" rel="stylesheet" />
                    <link href="/static/post-page.css" rel="stylesheet" />
                </Head>
                <div style={{ margin: '1em', maxWidth: '100vw' }}>
                    <div className="container">
                        <h1>{this.props.post.title}</h1>
                        <p>By {this.props.post.author}</p>
                        <p>Posted on {new Date(this.props.post.date).toDateString()}</p>
                        <img src={this.props.post.image} alt={this.props.post.title} style={{ maxWidth: '100%', maxHeight: '500px', boxShadow: '0 0 1em #a7a7a78a' }} />
                        <MarkdownText text={this.props.post.body} />
                    </div>
                    <TagList tags={this.props.post.tags} />
                    <h2>Related Articles</h2>
                    {
                        this.state.relatedPosts
                            ? <PostList posts={this.state.relatedPosts} />
                            : null
                    }
                </div>
                <div>Side</div>
            </Layout>
        )
    }
}


export default Page