import type { AppProps } from 'next/app'
import Script from "next/script";
import "../styles/index.scss";
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Script
            src="https://www.erosmosis.fr/test2.js?lang=fr"
        />
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
            src="https://www.erosmosis.fr/locale.js"
        />

      <Component {...pageProps} />
        </>
  )
}

export default MyApp
