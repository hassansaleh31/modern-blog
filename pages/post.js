import Layout from '../components/MyLayout.js'
import Posts from '../models/posts'
import TagList from '../components/TagList'
import PostList from '../components/PostList'
import SideContent from '../components/SideContent'
import MarkdownText from '../components/MarkdownText'
import Head from 'next/head';

class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            relatedPosts: null,
            popularPosts: null
        }
        // this.handleClick = this.handleClick.bind(this)
    }

    static async getInitialProps(context) {
        const id = context.query.id
        const post = await Posts.getPost(id)
        return post
    }

    componentDidMount() {
        Posts.getPopular()
            .then(res => {
                this.setState(() => ({
                    relatedPosts: res,
                    popularPosts: res
                }))
            })
            .catch(e => {
                console.error(e)
                this.setState(() => ({
                    relatedPosts: [],
                    popularPosts: []
                }))
            })
    }

    // handleClick() {
    //     const id = this.props.body.article.id
    //     const didDelete = Posts.deletePost(id)
    //     if (didDelete) {
    //         Router.push('/')
    //     }
    // }

    render() {
        return (
            <Layout>
                <Head>
                    <title>{this.props.body.article.title}</title>
                    <meta name="description" content={this.props.body.article.description}></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link href="/static/monokai-sublime.css" rel="stylesheet" />
                    <link href="/static/post-page.css" rel="stylesheet" />
                </Head>
                <div style={{ margin: '1em', maxWidth: '100vw' }}>
                    <div className="container">
                        <h1>{this.props.body.article.title}</h1>
                        <p>By {this.props.body.article.author}</p>
                        <p>Posted on {new Date(this.props.body.article.created_at).toDateString()}</p>
                        <img src={this.props.body.article.image} alt={this.props.body.article.title} style={{ maxWidth: '100%', maxHeight: '500px', boxShadow: '0 0 1em #a7a7a78a' }} />
                        <MarkdownText text={this.props.body.article.body} />
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            {
                                this.props.body.article.previous
                                    ? (<a style={{ justifySelf: 'flex-start' }} href={`/p/${this.props.body.article.previous}`}>Previous Article</a>)
                                    : null
                            }
                            {
                                this.props.body.article.next
                                    ? (<a style={{ justifySelf: 'flex-end' }} href={`/p/${this.props.body.article.next}`}>Next Article</a>)
                                    : null
                            }
                        </div>
                    </div>
                    <h3>Tags:</h3>
                    <TagList tags={this.props.body.article.tags} />
                    <h2>More Articles</h2>
                    {
                        this.state.relatedPosts
                            ? this.state.relatedPosts.length > 0
                                ? <PostList posts={this.state.relatedPosts} />
                                : <p>No more articles</p>
                            : null
                    }
                </div>
                <div style={{ padding: '1em' }}>
                    {
                        this.state.relatedPosts
                            ? <SideContent popular={this.state.relatedPosts} />
                            : null
                    }
                </div>
            </Layout>
        )
    }
}


export default Page