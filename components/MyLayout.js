import Header from './Header'
import Head from 'next/head'

const Layout = (props) => (
    <div>
        <Head>
            <link href="/static/index.css" rel="stylesheet" />
        </Head>
        <Header />
        <div className="main-grid">
            {props.children}
        </div>

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

export default Layout