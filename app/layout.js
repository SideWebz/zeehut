import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script"; // <-- voeg dit toe

export const metadata = {
  title: {
    default: "De Zeehut | Strandcabines in Oostende",
    template: "%s | De Zeehut",
  },
  description:
    "De Zeehut verhuurt strandcabines in Oostende en helpt met plaatsing, onderhoud en herstellingen voor een zorgeloos strandseizoen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" data-scroll-behavior="smooth">
      <body>
        {/* Umami Tracking Script */}
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