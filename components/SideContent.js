import Link from 'next/link'
import SideAd from './SideAd'
import AffiliateLinksList from './AffiliateLinksList'

export default ({ popular }) => (
    <div style={{ height: '100%', position: 'relative' }}>
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
        <div className="sticky-top">
            <a href="http://www.anrdoezrs.net/click-9006091-10564936" target="_top">
                <img src="http://www.ftjcfx.com/image-9006091-10564936" width="300" height="250" alt="1&1 IONOS – Tailored Service with a Personal Consultant" border="0" />
            </a>
            <AffiliateLinksList />
        </div>
    </div>
)