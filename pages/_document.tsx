import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* font-sans antialiased */}
      <body className="min-h-screen ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
