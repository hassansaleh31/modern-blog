import adsenseConfig from '../config'

export default () => (
    <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adsenseConfig.publisherId}
        data-ad-slot={adsenseConfig.sideAdSlot}
        data-ad-format="auto"
        data-full-width-responsive="true">
    </ins>
)