import Link from 'next/link'

const linkStyle = {
    marginRight: 5,
    padding: '1em'
}

const Header = () => (
    <header style={{
        padding: '1em',
        backgroundColor: '#ffffff',
        boxShadow: '0 0 1em #00000033'
    }}>
        <nav style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Link href="/" style={{ marginRight: 5 }}>

                <img src="/static/Logo.png" width="32" height="32" />

            </Link>
            <Link href="/" style={linkStyle}>
                Home
            </Link>
            <Link href="/about" style={linkStyle}>
                About Me
            </Link>
        </nav>
    </header>
)

export default Header