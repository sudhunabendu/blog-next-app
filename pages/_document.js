import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';
// import $ from 'jquery';

function Document() {
  return (
    <Html>
      <Head>
        <div>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <link rel="stylesheet" href="assets/plugins/css/plugins.css" />
          <link href="assets/css/style.css" rel="stylesheet" />
          <link
            type="text/css"
            rel="stylesheet"
            id="jssDefault"
            href="assets/css/colors/green-style.css"
          />
        </div>
      </Head>
      <body>
      <div className="Loader"></div>
        <Main />
        <NextScript />
        <script type="text/javascript" src="assets/plugins/js/jquery.min.js" async />
			<script type="text/javascript" src="assets/plugins/js/viewportchecker.js" async />
			<script type="text/javascript" src="assets/plugins/js/bootstrap.min.js" async />
			<script type="text/javascript" src="assets/plugins/js/bootsnav.js" async />
			<script type="text/javascript" src="assets/plugins/js/select2.min.js" async />
			<script type="text/javascript" src="assets/plugins/js/wysihtml5-0.3.0.js" async />
			<script type="text/javascript" src="assets/plugins/js/bootstrap-wysihtml5.js" async />
			<script type="text/javascript" src="assets/plugins/js/datedropper.min.js" async />
			<script type="text/javascript" src="assets/plugins/js/dropzone.js" async />
			<script type="text/javascript" src="assets/plugins/js/loader.js" async />
			<script type="text/javascript" src="assets/plugins/js/owl.carousel.min.js" async />
			<script type="text/javascript" src="assets/plugins/js/slick.min.js" async />
			<script type="text/javascript" src="assets/plugins/js/gmap3.min.js" async />
			<script type="text/javascript" src="assets/plugins/js/jquery.easy-autocomplete.min.js" async />
			{/* <script src="assets/js/custom.js" async /> */}
      <script type="text/javascript" src="assets/plugins/js/counterup.min.js" async />
      {/* <script src="assets/js/jQuery.style.switcher.js"></script> */}
      <Script src="assets/js/jQuery.style.switcher.js"></Script>
        {/* <script>
            {`$(document).ready(function() {
                $('#styleOptions').styleSwitcher();
            })`}
        </script>
        <script>
            {`function openRightMenu() {
                document.getElementById("rightMenu").style.display = "block"
            }`}

            {`function closeRightMenu() {
                document.getElementById("rightMenu").style.display = "none"
            }`}
        </script> */}

        {/* <Script id="">
        {`$(document).ready(function() {
                $('#styleOptions').styleSwitcher();
            })`}
        </Script> */}
      </body>
    </Html>
  );
}

export default Document;
