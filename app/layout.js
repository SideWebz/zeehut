import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
        <Navbar />

        <main className="container mt-4">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}