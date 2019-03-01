import AffiliateLinksModel from '../models/affiliateLinks'

class AffiliateLinksList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            links: []
        }
    }

    componentDidMount() {
        AffiliateLinksModel.getLinks()
            .then(body => {
                this.setState(state => ({
                    links: body.links
                }))
            })
    }

    render() {
        const links = this.state.links
        return (
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
        )
    }
}

export default AffiliateLinksList