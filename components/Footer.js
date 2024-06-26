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
        <nav style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: '1em' }}>
            <Link href="/" style={linkStyle}>
                Home
            </Link>
            <Link href="/about" style={linkStyle}>
                About
            </Link>
            <Link href="/privacy" style={linkStyle}>
                Privacy Policy
            </Link>
        </nav>
        <a className="twitter-follow-button" href="https://twitter.com/hassansaleh31"> Follow me @hassansaleh31</a>
        <p style={{ textAlign: 'center' }}>
            <strong>© 2021 Copyright Hassan Saleh. All rights reserved.</strong>
        </p>
        <p style={{ textAlign: 'center' }}>This site is built with <a href="https://nextjs.org/">Next.js</a> and hosted on <a href="https://cloud.google.com/">Google Cloud Platform</a>. The source code is on <a href="https://github.com/hassansaleh31/modern-blog">Github</a>.</p>
    </footer>
)

export default Footer