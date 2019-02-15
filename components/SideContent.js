export default ({ popular }) => (
    <div>
        <div className="container">
            <h1>This is an ad</h1>
        </div>
        <div className="container" style={{ margin: '1em 0' }}>
            <h2 style={{ borderBottom: '1px solid #cecece', marginTop: '0' }}>Popular Posts</h2>
            {popular.map(post => (
                <h3 key={post.article_id}><a href={`/p/${post.article_id}`}>{post.title}</a></h3>
            ))}
        </div>
        <div className="container">
            <h1>This is an ad</h1>
        </div>
    </div>
)