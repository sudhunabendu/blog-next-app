// import '../styles/globals.css'
import Script from "next/script";


function MyApp({ Component, pageProps }) {
  return (
   <>
     <Component {...pageProps} />
    <Script src="assets/js/custom.js"></Script>
   </>
  )


}


export default MyApp
