import Layout from '../components/MyLayout.js'
import Posts from '../models/posts'

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
                <div style={{ margin: '1em', padding: '1em', backgroundColor: 'white', border: '2px solid #cacaca' }}>
                    <h1>{this.props.post.title}</h1>
                    <p>By {this.props.post.author}</p>
                    <span>Posted on {this.props.post.date.toString()}</span>
                    <img src={this.props.post.image} style={{ maxWidth: '100%', boxShadow: '0 0 1em #a7a7a78a' }} />
                    <p>{this.props.post.body}</p>
                </div>
                <div>Side</div>
            </Layout>
        )
    }
}


export default Page