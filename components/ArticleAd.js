import adsenseConfig from '../config'

const ArticleAd = () => (
    <div style={{ marginBottom: '1em' }}>
        <ins className="adsbygoogle"
            style={{ display: 'block', textAlign: 'center' }}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client={adsenseConfig.publisherId}
            data-ad-slot={adsenseConfig.articleAdSlot}>
        </ins>
    </div>
)

export default ArticleAd