import Link from 'next/link'
import SideAd from './SideAd'

export default ({ popular }) => (
    <div>
        <div className="container">
            <SideAd />
        </div>
        <div className="container" style={{ margin: '1em 0' }}>
            <h2 style={{ borderBottom: '1px solid #cecece', marginTop: '0' }}>Popular Articles</h2>
            {popular.map(post => (
                <h3 key={post.article_id}>
                    <Link href={`/p/${post.article_id}`}>
                        <a>{post.title}</a>
                    </Link>
                </h3>
            ))}
        </div>
    </div>
)