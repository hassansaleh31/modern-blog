import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
    RedditShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    PinterestIcon,
    RedditIcon
} from 'react-share';

export default ({ url, media }) => (
    <div style={{ padding: '1em', display: 'flex', flexDirection: 'row' }}>
        <div className="share-button-wrapper">
            <FacebookShareButton url={url}>
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
        </div>
        <div className="share-button-wrapper">
            <LinkedinShareButton url={url}>
                <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
        </div>
        <div className="share-button-wrapper">
            <TwitterShareButton url={url}>
                <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
        </div>
        <div className="share-button-wrapper">
            <PinterestShareButton url={url} media={media}>
                <PinterestIcon size={32} round={true} />
            </PinterestShareButton>
        </div>
        <div className="share-button-wrapper">
            <RedditShareButton url={url}>
                <RedditIcon size={32} round={true} />
            </RedditShareButton>
        </div>
        <style jsx>{`
            .share-button-wrapper {
                margin-right: 1em;
                cursor: pointer;
                border-radius: 16px;
            }
        `}</style>
    </div>
)