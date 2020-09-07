import Head from "next/head";

import "../styles/base.css";

export const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />

            <meta name="author" content="Sankarsan Kampa" />
        </Head>

        <div style={{
            maxWidth: 1000,
            margin: "0 auto",
        }}>
            <Component {...pageProps} />
        </div>
    </>
);

export default App;
