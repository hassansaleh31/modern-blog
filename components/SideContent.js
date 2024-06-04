import Link from 'next/link'

const SideContent = ({ popular }) => (
    <div style={{ height: '100%', position: 'relative' }}>
        <div className="sticky-top">
            <div className="container" style={{ margin: '1em 0' }}>
                <h2 style={{ borderBottom: '1px solid #cecece', marginTop: '0' }}>Popular Articles</h2>
                {popular.map(post => (
                    <h3 key={post.article_id}>
                        <Link href={`/p/${post.article_id}`}>
                            {post.title}
                        </Link>
                    </h3>
                ))}
            </div>
        </div>
    </div>
)

export default SideContent