import adsenseConfig from '../config'

const SideAds = () => (
    <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adsenseConfig.publisherId}
        data-ad-slot={adsenseConfig.sideAdSlot}
        data-ad-format="auto"
        data-full-width-responsive="true">
    </ins>
)

export default SideAds