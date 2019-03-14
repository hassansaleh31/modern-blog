import Link from 'next/link'

const linkStyle = {
    marginRight: 5,
    padding: '1em'
}

const Footer = () => (
    <footer style={{
        padding: '1em',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <nav style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/about">
                <a style={linkStyle}>About</a>
            </Link>
            <Link href="/privacy">
                <a style={linkStyle}>Privacy Policy</a>
            </Link>
        </nav>
        <a className="twitter-follow-button" href="https://twitter.com/hassansaleh31"> Follow me @hassansaleh31</a>
        <p style={{ textAlign: 'center' }}>
            <strong>© 2019 Copyright Hassan Saleh. All rights reserved.</strong>
        </p>
        <p style={{ textAlign: 'center' }}>This site is built with <a href="https://nextjs.org/">Next.js</a> and hosted on <a href="https://m.do.co/c/f3bd84f63ce0">Digital Ocean</a>. The source code is hosted on <a href="https://github.com/hassansaleh31/modern-blog">Github</a>.</p>
    </footer>
)

export default Footer