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
                    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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