import { AppPropsWithLayout } from "../interfaces/page";
import "../theme/styles/index.css";
import { Poppins } from "@next/font/google";
import { SessionProvider } from "next-auth/react";

export const poppins = Poppins({
    weight: ["400", "500", "600", "800"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? (page => page);

    return (
        <main className={`${poppins.variable} font-sans`}>
            <SessionProvider session={pageProps.session}>
                {getLayout(<Component {...pageProps} />)}
            </SessionProvider>
        </main>
    );
}

export default MyApp;
