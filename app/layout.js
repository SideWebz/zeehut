import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";
import metadataContent from "../data/site/metadata.json";

export const metadata = {
  metadataBase: new URL("https://dezeehut.sidewebz.be"),
  title: {
    default: metadataContent.site.defaultTitle,
    template: metadataContent.site.titleTemplate,
  },
  description: metadataContent.site.defaultDescription,
  openGraph: {
    type: "website",
    siteName: "De Zeehut",
    images: [
      {
        url: metadataContent.site.shareCardImage.url,
        width: metadataContent.site.shareCardImage.width,
        height: metadataContent.site.shareCardImage.height,
        alt: metadataContent.site.shareCardImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [metadataContent.site.shareCardImage.url],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" data-scroll-behavior="smooth">
      <body>
        <Script
          strategy="afterInteractive"
          src="https://analytics.sidewebz.be/script.js"
          data-website-id="6cd043e8-e75c-412d-8b33-be8d517ec4d6"
        />

        <Navbar />

        <main className="container mt-4">{children}</main>

        <Footer />
      </body>
    </html>
  );
}