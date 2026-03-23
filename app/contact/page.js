import Image from "next/image";
import dezeehutBottom from "../../public/dezeehut-bottom.jpg";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact",
  description:
    "Contacteer De Zeehut in Oostende voor reservaties, herstellingen en vragen over strandcabines.",
};

export default function ContactPage() {
  return (
    <section className="section-block-tight container">
      <div className={styles.contactHeader}>
        <h1>Contact</h1>
        <p>Voor reservaties en herstellingen</p>
        <p>Stuur ons een mail en we helpen je graag verder</p>
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
