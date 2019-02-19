import Link from 'next/link'

const PostCard = (props) => (
    <li>
        <div className="post-card">
            <Link href={`/p/${props.post.article_id}`}>
                <a>
                    <div style={{ backgroundImage: `url(${props.post.image})` }} title={props.post.title} className="post-card-image"></div>
                </a>
            </Link>
            <div className="post-card-content">
                <h2>
                    <Link href={`/p/${props.post.article_id}`}>
                        <a style={{ textDecoration: 'none', color: 'inherit' }} >
                            {props.post.title}
                        </a>
                    </Link>
                </h2>
                <span>{new Date(props.post.created_at).toDateString()}</span>
                <p>{props.post.description}</p>
            </div>
        </div>
    </li>
)

export default PostCard