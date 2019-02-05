import Header from './Header'

const layoutStyle = {
    padding: 20,
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
        <style jsx global>
            {`
                body { 
                margin 0;
                }
            `}
        </style>
    </div>
)

export default Layout