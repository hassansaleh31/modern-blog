const PostCard = (props) => (
    <li>
        <div className="post-card">
            <a href={`/p/${props.post.article_id}`}>
                <div style={{ backgroundImage: `url(${props.post.image})` }} className="post-card-image"></div>
            </a>
            <div className="post-card-content">
                <h2>
                    <a style={{ textDecoration: 'none', color: 'inherit' }} href={`/p/${props.post.id}`}>
                        {props.post.title}
                    </a>
                </h2>
                <span>{new Date(props.post.created_at).toDateString()}</span>
                <p>{props.post.description}</p>
            </div>
        </div>
    </li>
)

export default PostCard