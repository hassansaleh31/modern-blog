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
                    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/static/favicon-114.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/static/favicon-114.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/static/favicon-144.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/static/favicon-144.png" />
                    <link rel="icon" type="image/vnd.microsoft.icon" sizes="32x32 48x48" href="/static/favicon.ico" />
                    <link rel="icon" sizes="128x128" href="/static/favicon.icns" />
                    <link rel="icon" href="/static/favicon.png" type="image/x-icon" />
                    <link href="/static/index.css" rel="stylesheet" />
                    <link rel="alternate" href="https://hassansaleh.info" hrefLang="en-us" />
                    <meta name="google-site-verification" content="LK0sQdlPmUPoJrkECxDaviGVzqAtRJsuojAkQ0xY5vQ" />
                    <meta name="p:domain_verify" content="50a29c02349fc4800cf047560aabd2e2" />
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
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