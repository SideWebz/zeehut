import Image from "next/image";
import dezeehut2 from "../../public/dezeehut2.png";
import servicesData from "../../public/content/page2.json";
import iconsData from "../../public/content/icons.json";
import metadataContent from "../../public/content/metadata.json";
import styles from "./verhuur.module.css";

export const metadata = metadataContent.pages.verhuur;

const iconMap = Object.fromEntries(iconsData.map((icon) => [icon.key, icon]));

function IconGlyph({ iconKey }) {
  const icon = iconMap[iconKey] ?? iconsData[0];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox={icon.viewBox}
    >
      {icon.paths.map((path, index) => {
        if (typeof path === "string") {
          return (
            <path
              key={`${icon.key}-${index}`}
              d={path}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          );
        }

        return (
          <path
            key={`${icon.key}-${index}`}
            d={path.d}
            fill={path.fill}
            stroke={path.stroke}
            strokeWidth={path.strokeWidth}
            strokeLinecap={path.strokeLinecap}
            strokeLinejoin={path.strokeLinejoin}
          />
        );
      })}
    </svg>
  );
}

function ServiceCard({ title, description, icon }) {
  return (
    <div className={styles.serviceCardWrapper}>
      <svg
        className={styles.serviceCardBg}
        viewBox="0 0 391 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className={styles.serviceCardBgPath}
          d="M391 200C391 211.046 382.046 220 371 220H316C304.954 220 296 228.954 296 240V300C296 311.046 287.046 320 276 320H20C8.95431 320 0 311.046 0 300V20C0 8.95431 8.95431 0 20 0H371C382.046 0 391 8.95431 391 20V200Z"
          fill="var(--card-bg)"
        />
      </svg>

      <div className={styles.serviceCardContent}>
        <h3 className={styles.serviceCardTitle}>{title}</h3>
        <p className={styles.serviceCardDesc}>{description}</p>
      </div>

      <div className={styles.serviceCardBadge} aria-hidden="true">
        <svg viewBox="0 0 85 85" xmlns="http://www.w3.org/2000/svg" className={styles.serviceCardBadgeBg}>
          <path
            d="M0 10C0 4.47715 4.47715 0 10 0H65C76.0457 0 85 8.95431 85 20V65C85 76.0457 76.0457 85 65 85H20C8.9543 85 0 76.0457 0 65V10Z"
            fill="var(--badge-bg)"
          />
        </svg>
        <div className={styles.serviceCardBadgeIcon}>
          <IconGlyph iconKey={icon} />
        </div>
      </div>
    </div>
  );
}

export default function Verhuur() {
  return (
    <div>
      {/* HEADER */}
      <section className="section-block-tight">
        <div
          className="w-100 rounded-4 bg-light d-flex flex-column align-items-center justify-content-center text-center px-4 py-3 py-md-5"
          style={{ minHeight: 'clamp(120px, 20vw, 220px)' }}
        >
          <h1 style={{ fontSize: 'clamp(2.1rem, 5.1vw, 3.2rem)', lineHeight: 1.06 }}>Verhuur Strandcabines</h1>
          <p className="mb-0" style={{ fontSize: 'clamp(0.9rem, 1.45vw, 1.02rem)' }}>De sleutel voor een zorgeloos strandseizoen</p>
        </div>
        <div className="d-flex gap-2 mt-2" style={{ height: 'clamp(120px, 20vw, 220px)' }}>
          <div className="position-relative overflow-hidden rounded-4" style={{ flex: 1 }}>
            <Image src="/dezeehut21.jpg" fill style={{ objectFit: 'cover' }} sizes="50vw" priority loading="eager" alt="Verhuur 1" />
          </div>
          <div className="position-relative overflow-hidden rounded-4" style={{ flex: 1 }}>
            <Image src="/dezeehut20.jpg" fill style={{ objectFit: 'cover' }} sizes="50vw" loading="eager" alt="Verhuur 2" />
          </div>
        </div>
      </section>

      {/* SECTIE 2 */}
      <section className="container section-block">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <h1>Onze diensten</h1>
            <p>Geen zorgen van onderhoud cabine en bijstand op het strand, alles is inbegrepen in de huurprijs van de cabine.</p>
          </div>
        </div>

        <div className={styles.servicesGrid}>
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </section>
    </div>
  );
}