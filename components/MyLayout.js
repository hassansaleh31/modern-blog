import Header from './Header'

const Layout = (props) => (
    <div>
        <Header />
        <div className="main-grid">
            {props.children}
        </div>
        <style jsx global>
            {`
                body { 
                    margin 0;
                    background-color: #fcfcfc;
                    font-family: sans-serif;
                    color: #212121;
                }
            `}
        </style>
        <style jsx>
            {`
                .main-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-gap: 1em;
                }

                @media only screen and (min-width: 1024px) {
                    .main-grid {
                        grid-template-columns: 1fr 300px;
                    }
                }
            `}
        </style>
    </div>
)

export default Layout