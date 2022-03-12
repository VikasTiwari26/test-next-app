import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const originalRenderPage = ctx.renderPage

    //     // Run the React rendering logic synchronously
    //     ctx.renderPage = () =>
    //         originalRenderPage({
    //             // Useful for wrapping the whole react tree
    //             enhanceApp: (App) => App,
    //             // Useful for wrapping in a per-page basis
    //             enhanceComponent: (Component) => Component,
    //         })

    //     // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    //     const initialProps = await Document.getInitialProps(ctx)

    //     return initialProps
    // }

    render() {
        return (
            <Html>
                <Head />
                    
                <body>
                    <Main />
                    <NextScript />
                </body>
                <script src="/assets/js/modernizr-2.6.2.min.js" defer ></script>

                    <script src="/assets/js/jquery-1.10.2.min.js" defer ></script>
                    <script src="/bootstrap/js/bootstrap.min.js" defer ></script>
                    <script src="/assets/js/bootstrap-select.min.js" defer ></script>
                    <script src="/assets/js/bootstrap-hover-dropdown.js" defer ></script>

                    <script src="/assets/js/easypiechart.min.js" defer ></script>
                    <script src="/assets/js/jquery.easypiechart.min.js" defer ></script>

                    <script src="/assets/js/owl.carousel.min.js" defer ></script>
                    <script src="/assets/js/wow.js" defer ></script>

                    <script src="/assets/js/icheck.min.js" defer ></script>
                    <script src="/assets/js/price-range.js" defer ></script>

                    <script src="/assets/js/main.js" defer ></script>
            </Html>
        )
    }
}

export default MyDocument