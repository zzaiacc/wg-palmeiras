import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.svg" />
        <title>Wearing Glory</title>
      </Head>
      <div className="overflow-hidden">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
