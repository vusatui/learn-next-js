import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

import Layout from "../../components/Layout";

export default function FirstPost() {
    const onScriptLoad = () => console.log(`script loaded correctly, window.FB has been populated`);

    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={onScriptLoad}
            />
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    );
};