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

export default ({ article, url }) => (
    <div style={{ padding: '1em', display: 'flex', flexDirection: 'row' }}>
        <div className="share-button-wrapper">
            <FacebookShareButton url={url} quote={article.title}>
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
        </div>
        <div className="share-button-wrapper">
            <LinkedinShareButton url={url} title={article.title} description={article.description}>
                <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
        </div>
        <div className="share-button-wrapper">
            <TwitterShareButton url={url} title={article.title} via={article.author} hashtags={article.tags}>
                <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
        </div>
        <div className="share-button-wrapper">
            <PinterestShareButton url={url} media={article.image} description={article.title}>
                <PinterestIcon size={32} round={true} />
            </PinterestShareButton>
        </div>
        <div className="share-button-wrapper">
            <RedditShareButton url={url} title={article.title}>
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