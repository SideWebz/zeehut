import Image from "next/image";
import dezeehutBottom from "../../public/dezeehut-bottom.jpg";
import metadataContent from "../../public/content/metadata.json";
import styles from "./contact.module.css";

export const metadata = metadataContent.pages.contact;

export default function ContactPage() {
  return (
    <section className="section-block-tight">
      <div
        className="w-100 rounded-4 bg-light d-flex flex-column align-items-center justify-content-center text-center px-4 py-3 py-md-5"
        style={{ minHeight: "clamp(120px, 20vw, 220px)" }}
      >
        <h1 style={{ fontSize: "clamp(2.1rem, 5.1vw, 3.2rem)", lineHeight: 1.06 }}>Contact</h1>
        <p className="mb-0" style={{ fontSize: "clamp(0.9rem, 1.45vw, 1.02rem)" }}>Voor reservaties en herstellingen</p>
        <p className="mb-0" style={{ fontSize: "clamp(0.9rem, 1.45vw, 1.02rem)" }}>Stuur ons een mail en we helpen je graag verder</p>
      </div>

      <div className={styles.contactVisualWrap}>
        <Image
          src={dezeehutBottom}
          alt="De Zeehut contact"
          fill
          priority
          sizes="100vw"
          className={styles.contactVisualImage}
        />

        <div className={styles.contactInfoPanel}>
          <div className={styles.contactInfoGrid}>
            <div className={styles.contactInfoItem}>
              <h2>Telefoon</h2>
              <a href="tel:+32475888999">+32 475 88 89 99</a>
            </div>

            <div className={styles.contactInfoItem}>
              <h2>E-mail</h2>
              <a href="mailto:michel@dezeehut.be">michel@dezeehut.be</a>
            </div>

            <div className={styles.contactInfoItem}>
              <h2>Locatie</h2>
              <p>Oostende</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
