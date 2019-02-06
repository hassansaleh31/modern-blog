import Link from 'next/link'

const PostCard = (props) => (
    <li>
        <Link as={`/p/${props.post.id}`} href={`/post?id=${props.post.id}`}>
            <div className="post-card">
                <div style={{ backgroundImage: `url(${props.post.image})` }} className="post-card-image"></div>
                <div className="post-card-content">
                    <h2>{props.post.title}</h2>
                    <span>{props.post.date.toString()}</span>
                    <p>{props.post.body}</p>
                </div>
            </div>
        </Link>
    </li>
)

export default PostCard