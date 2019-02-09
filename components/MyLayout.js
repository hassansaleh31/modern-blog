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
                    display: flex;
                    flex-direction: column;
                }

                @media only screen and (min-width: 1135px) {
                    .main-grid {
                        display: grid;
                        grid-template-columns: 1fr 300px;
                        grid-gap: 1em;
                    }
                }
            `}
        </style>
    </div>
)

export default Layout