import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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