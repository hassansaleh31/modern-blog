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
                <div style={{ margin: '1em', padding: '1em', backgroundColor: 'white' }}>
                    <h1>{this.props.post.title}</h1>
                    <p>{this.props.post.author}</p>
                    <img src={this.props.post.image} style={{maxWidth: '100%'}} />
                    <p>{this.props.post.body}</p>
                </div>
                <div>Side</div>
            </Layout>
        )
    }
}


export default Page