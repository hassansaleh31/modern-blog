import Link from 'next/link'
import SideAd from './SideAd'
import AffiliateBanner from './AffiliateBanner'
import AffiliateLinksList from './AffiliateLinksList'

export default ({ popular }) => (
    <div style={{ height: '100%', position: 'relative' }}>
        <AffiliateBanner />
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
        <div className="sticky-top">
            <AffiliateLinksList />
        </div>
    </div>
)