import Header from './Header'
import Footer from './Footer'

import adsenseConfig from '../config'

class MyLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mounted: false
        }
    }

    componentDidMount() {
        (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: adsenseConfig.publisherId
        })

        window.twttr = (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
                t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);

            t._e = [];
            t.ready = function (f) {
                t._e.push(f);
            };

            return t;
        }(document, "script", "twitter-wjs"))
    }

    render() {
        return (
            <div>
                <Header />
                <div className="main-grid">
                    {this.props.children}
                </div>
                <Footer />

                <style jsx>
                    {`
                        .main-grid {
                            display: flex;
                            flex-direction: column;
                        }

                        @media only screen and (min-width: 1135px) {
                            .main-grid {
                                display: grid;
                                grid-template-columns: 804px 300px;
                                grid-gap: 1em;
                                max-width: 1135px;
                                margin: auto;
                            }
                        }
                    `}
                </style>
            </div>
        )
    }
}

export default MyLayout