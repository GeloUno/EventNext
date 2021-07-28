import Document, { Html, Head, NextScript, Main } from 'next/document'
class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <div id="overlays" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument