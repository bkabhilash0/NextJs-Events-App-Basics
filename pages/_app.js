import Head from "next/head";
import "../styles/globals.css";
import Layout from "../components/layout/layout";

// Wrapper Component
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Next JS Events" />
        <title>Next Events</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
