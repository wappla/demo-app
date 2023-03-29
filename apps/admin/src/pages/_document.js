import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

const environment = process.env.NEXT_PUBLIC_APP_ENV

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        let faviconPostfix = ''
        if (environment === 'staging') {
            faviconPostfix = '-staging'
        }
        return (
            <Html>
                <Head>
                    <link
                        rel="shortcut icon"
                        type="image/png"
                        href={`/favicon${faviconPostfix}-16x16.png`}
                        sizes="16x16"
                    />
                    <link
                        rel="shortcut icon"
                        type="image/png"
                        href={`/favicon${faviconPostfix}-32x32.png`}
                        sizes="32x32"
                    />
                    <link
                        rel="shortcut icon"
                        type="image/png"
                        href={`/favicon${faviconPostfix}-48x48.png`}
                        sizes="48x48"
                    />
                    <link
                        rel="shortcut icon"
                        type="image/png"
                        href={`/favicon${faviconPostfix}-96x96.png`}
                        sizes="96x96"
                    />
                    <link
                        rel="shortcut icon"
                        type="image/png"
                        href={`/favicon${faviconPostfix}-144x144.png`}
                        sizes="144x144"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href={`/apple-touch-icon${faviconPostfix}.png`}
                    />

                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=auto"
                    />
                </Head>
                <body>
                    <Main />
                    <div id="modals" className="z-modals relative" />
                    <div id="popovers" className="z-popovers relative" />
                    <div id="tooltips" className="z-tooltips relative" />
                    <div
                        id="notifications"
                        className="z-notifications relative"
                    />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
