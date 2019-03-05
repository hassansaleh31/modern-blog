import AffiliateLinksModel from '../models/affiliateLinks'

class AffiliateLinksList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            links: [],
            image: null
        }
    }

    componentDidMount() {
        AffiliateLinksModel.getSideLinks()
            .then(body => {
                this.setState(state => ({
                    links: body.links,
                    image: body.image
                }))
            })
    }

    render() {
        const links = this.state.links
        const image = this.state.image
        return (
            <div>
                {
                    image
                        ? (
                            <div className="container" dangerouslySetInnerHTML={{ __html: image.affiliate_link_html }}></div>
                        )
                        : null
                }
                <div className="container" style={{ margin: '1em 0' }}>
                    {
                        links
                            ? (
                                <div>
                                    <h2 style={{ borderBottom: '1px solid #cecece', marginTop: '0' }}>Web Development Deals</h2>
                                    {links.map(link => (
                                        <h3 key={link.affiliate_link_id} dangerouslySetInnerHTML={{ __html: link.affiliate_link_html }} />
                                    ))}
                                </div>
                            )
                            : null
                    }
                </div>
            </div>
        )
    }
}

export default AffiliateLinksList