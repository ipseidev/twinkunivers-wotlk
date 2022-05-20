import type {AppProps} from 'next/app'
import Script from "next/script";
import "../styles/index.scss";
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'animate.css';
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Twinkunivers</title>
                <meta name="title" content="Twinkunivers"/>
                <meta name="description" content="Twinkunivers - Wotlk edition"/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.twinkunivers.com/"/>
                <meta property="og:title" content="Twinkunivers"/>
                <meta property="og:description" content="Twinkunivers - Wotlk edition"/>
                <meta property="og:image" content="https://twinkunivers.com/assets/background2.png"/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://www.twinkunivers.com/"/>
                <meta property="twitter:title" content="Twinkunivers"/>
                <meta property="twitter:description" content="Twinkunivers - Wotlk edition"/>
                <meta property="twitter:image" content="https://twinkunivers.com/assets/background2.png"/>
            </Head>
            <Script
                id="show-banner"
                dangerouslySetInnerHTML={{
                    __html: `var aowow_tooltips = { 'colorlinks': true, 'iconizelinks': true, 'renamelinks':true }`,
                }}
            />
            <Script
                src="https://www.erosmosis.fr/locale_frfr.js"
            />
            <Script
                src="https://www.erosmosis.fr/locale_dede.js"
            />
            <Script
                src="https://www.erosmosis.fr/locale_eses.js"
            />
            <Script
                src="https://www.erosmosis.fr/locale.js"
            />

            <Component {...pageProps} />
        </>
    )
}

export default MyApp
