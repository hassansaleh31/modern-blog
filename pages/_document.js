import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html lang="en">
                <Head>
                    <link href="/static/index.css" rel="stylesheet" />
                    <meta name="google-site-verification" content="LK0sQdlPmUPoJrkECxDaviGVzqAtRJsuojAkQ0xY5vQ" />
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-92632628-3"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default MyDocument