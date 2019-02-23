import Layout from '../components/MyLayout.js'
import Posts from '../models/posts'
import TagList from '../components/TagList'
import PostList from '../components/PostList'
import SideContent from '../components/SideContent'
import MarkdownText from '../components/MarkdownText'
import ShareButtons from '../components/ShareButtons'
import ArticleAd from '../components/ArticleAd'
import Head from 'next/head';

class Page extends React.Component {
    constructor(props) {
        super(props)
    }

    static async getInitialProps(context) {
        const id = context.query.id
        const post = await Posts.getPost(id)
        const related = await Posts.getRelated(id)
        const popular = await Posts.getPopular()
        return { article: post.article, related: related.articles, popular: popular.articles }
    }

    componentDidMount() {
        setTimeout(() => {
            Posts.incrementViews(this.props.article.article_id)
                .then(res => { console.log('Article views incremented') })
                .catch(e => { console.log('Failed to increment article views') })
        }, 5000)
    }

    render() {
        return (
            <Layout>
                <Head>
                    <title>{this.props.article.title}</title>
                    <meta name="description" content={this.props.article.description}></meta>
                    <meta property="og:url" content={`https://hassansaleh.info/p/${this.props.article.article_id}`}></meta>
                    <meta property="og:type" content="article"></meta>
                    <meta property="og:title" content={this.props.article.title}></meta>
                    <meta property="og:description" content={this.props.article.description}></meta>
                    <meta property="article:published_time" content={this.props.article.created_at}></meta>
                    <meta property="article:author" content="Hassan Saleh"></meta>
                    <meta property="og:image" content={this.props.article.image}></meta>
                    <link href="/static/monokai-sublime.css" rel="stylesheet" />
                    <link href="/static/post-page.css" rel="stylesheet" />
                    <script type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: `{
                                "@context": "http://schema.org",
                                "@type": "Article",
                                "headline": "${this.props.article.title}",
                                "author": {
                                    "@type": "Person",
                                    "name": "Hassan Saleh"
                                },
                                "datePublished": "${this.props.article.created_at}",
                                "dateModified": "${this.props.article.created_at}",
                                "image": "${this.props.article.image}",
                                "articleBody": "${this.props.article.body}",
                                "url": "https://hassansaleh.info/p/${this.props.article.article_id}",
                                "description": "${this.props.article.description}",
                                "keywords": "${this.props.article.tags.join(' ')}",
                                "mainEntityOfPage": "https://hassansaleh.info"
                            }`
                        }} />
                </Head>
                <div className="main-content">
                    <div className="container">
                        <h1>{this.props.article.title}</h1>
                        <p>Posted on {new Date(this.props.article.created_at).toDateString()}</p>
                        <p>{this.props.article.description}</p>
                        <img src={this.props.article.image} alt={this.props.article.title} style={{ maxWidth: '100%', maxHeight: '500px', boxShadow: '0 0 1em #a7a7a78a' }} />
                        <ShareButtons article={this.props.article} url={`https://hassansaleh.info/p/${this.props.article.article_id}`}></ShareButtons>
                        <ArticleAd />
                        <MarkdownText text={this.props.article.body} />
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            {
                                this.props.article.previous
                                    ? (<a style={{ justifySelf: 'flex-start' }} href={`/p/${this.props.article.previous}`}>Previous Article</a>)
                                    : null
                            }
                            {
                                this.props.article.next
                                    ? (<a style={{ justifySelf: 'flex-end' }} href={`/p/${this.props.article.next}`}>Next Article</a>)
                                    : null
                            }
                        </div>
                    </div>
                    <div className="padded-on-mobile">
                        <h3>Tags:</h3>
                        <TagList tags={this.props.article.tags} />
                        <h2>Related Articles</h2>
                        {
                            this.props.related
                                ? this.props.related.length > 0
                                    ? <PostList posts={this.props.related} />
                                    : <p>No more articles</p>
                                : null
                        }
                    </div>
                </div>
                <div className="side-content">
                    {
                        this.props.popular
                            ? <SideContent popular={this.props.popular} />
                            : null
                    }
                </div>
            </Layout>
        )
    }
}


export default Page