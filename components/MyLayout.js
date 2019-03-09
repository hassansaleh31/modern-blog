import Header from './Header'
import Footer from './Footer'

import adsenseConfig from '../config'

class MyLayout extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (document.querySelectorAll('.adsbygoogle').length > 0 && typeof adsbygoogle != 'undefined') {
            (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: adsenseConfig.publisherId
            })
        }

        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', adsenseConfig.analyticsCode);

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
                <main>
                    <div className="main-grid">
                        {this.props.children}
                    </div>
                </main>
                <Footer />

                <style jsx>
                    {`
                        .main-grid {
                            display: flex;
                            flex-direction: column;
                            padding: 1em 0;
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