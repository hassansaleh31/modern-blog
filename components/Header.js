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
        <nav>
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/about">
                <a style={linkStyle}>About</a>
            </Link>
        </nav>
    </header>
)

export default Header