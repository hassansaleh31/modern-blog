import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <header>
        <nav style={{ padding: '1em' }}>
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