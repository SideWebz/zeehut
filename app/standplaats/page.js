import Image from 'next/image';
import metadataContent from "../../data/site/metadata.json";
import standplaatsData from "../../data/pages/standplaats.json";

export const metadata = metadataContent.pages.standplaats;

export default function StandplaatsPage() {
  return (
    <div>
      <section className="section-block-tight">
        <div
          className="w-100 rounded-4 bg-light d-flex flex-column align-items-center justify-content-center text-center px-4 py-3 py-md-5"
          style={{ minHeight: 'clamp(120px, 20vw, 220px)' }}
        >
          <h1 style={{ fontSize: 'clamp(2.1rem, 5.1vw, 3.2rem)', lineHeight: 1.06 }}>Standplaatsen</h1>
          <p className="mb-0" style={{ fontSize: 'clamp(0.9rem, 1.45vw, 1.02rem)' }}>{standplaatsData.paragraphs.headerLine}</p>
        </div>
        <div className="d-flex gap-2 mt-2" style={{ height: 'clamp(120px, 20vw, 220px)' }}>
          <div className="position-relative overflow-hidden rounded-4" style={{ flex: 1 }}>
            <Image src={standplaatsData.media.headerImages[0].path} fill style={{ objectFit: 'cover' }} sizes="50vw" priority loading="eager" alt={standplaatsData.media.headerImages[0].alt} />
          </div>
          <div className="position-relative overflow-hidden rounded-4" style={{ flex: 1 }}>
            <Image src={standplaatsData.media.headerImages[1].path} fill style={{ objectFit: 'cover' }} sizes="50vw" loading="eager" alt={standplaatsData.media.headerImages[1].alt} />
          </div>
        </div>
      </section>

      <section className="container section-block">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-4">
            <p>{standplaatsData.paragraphs.intro}</p>
          </div>
        </div>
        <div className="row g-4 mb-4">
          <div className="col-12 col-md">
            <div className="h-100 bg-prim rounded-4">
              <h2>Standplaatsen alle zones</h2>
              <p>{standplaatsData.paragraphs.allZonesPrefix} <a className="standplaats-underlined-link" href="https://www.oostende.be/strandcabines" target="_blank" rel="noopener noreferrer">{standplaatsData.paragraphs.allZonesLinkText}</a>{standplaatsData.paragraphs.allZonesSuffix}</p>
            </div>
          </div>
          <div className="col-12 col-md">
            <div className="h-100 bg-sec rounded-4">
              <h2>Standplaats in Mariakerke - zone 4</h2>
              <p>{standplaatsData.paragraphs.zone4Prefix} <a className="standplaats-underlined-link" href="mailto:michel@dezeehut.be">{standplaatsData.paragraphs.zone4LinkText}</a> {standplaatsData.paragraphs.zone4Suffix}</p>
            </div>
          </div>
        </div>
        <div className="mb-4 bg-thr rounded-4">
          <h2>Start seizoen</h2>
          <p>{standplaatsData.paragraphs.season}</p>
        </div>
      </section>

      <section className="standplaats-footer-image-wrap" aria-hidden="true">
        <div className="standplaats-footer-image-media">
          <Image
            src={standplaatsData.media.images[0].path}
            fill
            sizes="100vw"
            priority
            loading="eager"
            style={{ objectFit: 'cover' }}
            alt={standplaatsData.media.images[0].alt}
          />
        </div>
      </section>
    </div>
  );
}
