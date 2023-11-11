import { ReactElement } from "react";
import Head from "next/head";

import Layout from "Layouts/Layout";
import { NextPageWithLayout } from "@interfaces/page";

const Home: NextPageWithLayout = () => (
    <Head>
        <title>Contacts App</title>
        <meta property="og:title" content="Contacts App" />
    </Head>
);

Home.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default Home;
