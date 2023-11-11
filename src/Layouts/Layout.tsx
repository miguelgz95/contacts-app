import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="max-w-full min-h-screen  flex flex-col bg-slate-50">
            <Head>
                <title> Contacts App</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, user-scalable=no"
                />
            </Head>

            <Navbar />

            <div className="max-w-full min-h-screen flex justify-center mt-12 pr-3 pl-3 md:pr-5 md:pl-5">
                {children}
            </div>
            <Footer />
            <style>{`  scrollbar-width: thin;  `}</style>
        </div>
    );
};

export default Layout;
