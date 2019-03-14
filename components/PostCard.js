import Link from 'next/link'

const PostCard = (props) => (
    <Link href={`/p/${props.post.article_id}`}>
        <a style={{ textDecoration: 'none', color: 'inherit' }} >
            <div className="post-card">
                <div style={{ backgroundImage: `url(${props.post.image})` }} title={props.post.title} className="post-card-image"></div>
                <div className="post-card-content">
                    <h2>{props.post.title}</h2>
                    <span>{new Date(props.post.created_at).toDateString()}</span>
                    <p>{props.post.description}</p>
                </div>
            </div>
        </a>
    </Link>
)

export default PostCard