import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useEffect } from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* font-sans antialiased */}
      <body className="min-h-screen ">
        <div id="fb-root"></div>
        <Script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v19.0&appId=3492809881008962"
          nonce="Gy7mJXCp"
        ></Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
