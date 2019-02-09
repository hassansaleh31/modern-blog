const PostCard = (props) => (
    <li>
        <a style={{ textDecoration: 'none', color: 'inherit' }} href={`/p/${props.post.id}`}>
            <div className="post-card">
                <div style={{ backgroundImage: `url(${props.post.image})` }} className="post-card-image"></div>
                <div className="post-card-content">
                    <h2>{props.post.title}</h2>
                    <span>{new Date(props.post.date).toDateString()}</span>
                    <p>{props.post.description}</p>
                </div>
            </div>
        </a>
    </li>
)

export default PostCard