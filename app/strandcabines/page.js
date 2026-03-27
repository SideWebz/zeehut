import Image from "next/image";
import Link from "next/link";
import metadataContent from "../../data/site/metadata.json";
import strandcabinesData from "../../data/pages/strandcabines.json";

export const metadata = metadataContent.pages.strandcabines;

export default function Strandcabines() {
  return (
    <div>
      <section className="w-100 section-block-tight">
        <video 
          src={strandcabinesData.media.video}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-100 rounded-4"
          style={{ maxHeight: '650px', objectFit: 'cover' }}
        />
      </section>

      <section className="container section-block">
        <div className="row g-4 align-items-center">
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-center">
              <div>
                <h1>Voorbeeld strandcabine</h1>
                <p>{strandcabinesData.paragraphs.intro}</p>
                <Link href="/contact" className="btn btn-custom mt-3">Info & reservatie</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="d-flex gap-2 w-100"
              style={{ aspectRatio: '1 / 1' }}
            >
              <div className="d-flex flex-column gap-2" style={{ flex: 1 }}>
                <div className="position-relative overflow-hidden" style={{ flex: 1, borderRadius: '1rem 0.5rem 0.5rem 0.5rem' }}>
                  <Image src={strandcabinesData.media.collageTop[0].path} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 31vw, 16vw" alt={strandcabinesData.media.collageTop[0].alt}/>
                </div>
                <div className="position-relative overflow-hidden" style={{ flex: 1, borderRadius: '0.5rem 0.5rem 0.5rem 1rem' }}>
                  <Image src={strandcabinesData.media.collageTop[1].path} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 31vw, 16vw" alt={strandcabinesData.media.collageTop[1].alt}/>
                </div>
              </div>

              <div className="d-flex flex-column gap-2" style={{ flex: 1 }}>
                <div className="position-relative overflow-hidden" style={{ flex: 1, borderRadius: '0.5rem' }}>
                  <Image src={strandcabinesData.media.collageTop[2].path} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 31vw, 16vw" alt={strandcabinesData.media.collageTop[2].alt}/>
                </div>
                <div className="position-relative overflow-hidden" style={{ flex: 1.35, borderRadius: '0.5rem' }}>
                  <Image src={strandcabinesData.media.collageTop[3].path} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 31vw, 16vw" alt={strandcabinesData.media.collageTop[3].alt}/>
                </div>
                <div className="position-relative overflow-hidden" style={{ flex: 1, borderRadius: '0.5rem' }}>
                  <Image src={strandcabinesData.media.collageTop[4].path} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 31vw, 16vw" alt={strandcabinesData.media.collageTop[4].alt}/>
                </div>
              </div>

              <div className="d-flex flex-column gap-2" style={{ flex: 1 }}>
                <div className="position-relative overflow-hidden" style={{ flex: 1, borderRadius: '0.5rem 1rem 0.5rem 0.5rem' }}>
                  <Image src={strandcabinesData.media.collageTop[5].path} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 31vw, 16vw" alt={strandcabinesData.media.collageTop[5].alt}/>
                </div>
                <div className="position-relative overflow-hidden" style={{ flex: 1, borderRadius: '0.5rem 0.5rem 1rem 0.5rem' }}>
                  <Image src={strandcabinesData.media.collageTop[6].path} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 31vw, 16vw" alt={strandcabinesData.media.collageTop[6].alt}/>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="position-relative rounded-4 overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
              <Image 
                src={strandcabinesData.media.collageTop[7].path}
                fill 
                style={{ objectFit: 'cover', borderRadius: '1rem' }} 
                sizes="(max-width: 768px) 100vw, 50vw"
                alt={strandcabinesData.media.collageTop[7].alt}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-center">
              <div className="ps-md-4 ps-lg-5">
                <h1>Ons design</h1>
                <p>{strandcabinesData.paragraphs.design}</p>
                <a href="#strandcabines-fotos" className="btn btn-custom mt-3 d-none d-lg-inline-block">Bekijk foto&apos;s</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="strandcabines-fotos" className="container-fluid section-block" style={{ scrollMarginTop: '120px' }}>
        <div className="w-100 d-flex gap-2" style={{ aspectRatio: '16 / 11' }}>
          <div className="d-flex flex-column gap-2" style={{ flex: 1 }}>
            <div className="position-relative overflow-hidden" style={{ flex: 1, borderRadius: '1rem 0.5rem 0.5rem 0.5rem' }}>
              <Image
                src={strandcabinesData.media.collageBottom[0].path}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 32vw, 33vw"
                alt={strandcabinesData.media.collageBottom[0].alt}
              />
            </div>
            <div className="position-relative overflow-hidden" style={{ flex: 2, borderRadius: '0.5rem 0.5rem 0.5rem 1rem' }}>
              <Image
                src={strandcabinesData.media.collageBottom[1].path}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 32vw, 33vw"
                loading="eager"
                alt={strandcabinesData.media.collageBottom[1].alt}
              />
            </div>
          </div>

          <div className="d-flex flex-column gap-2" style={{ flex: 1 }}>
            <div className="position-relative overflow-hidden" style={{ flex: 1, borderRadius: '0.5rem' }}>
              <Image
                src={strandcabinesData.media.collageBottom[2].path}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 32vw, 33vw"
                alt={strandcabinesData.media.collageBottom[2].alt}
              />
            </div>
            <div className="position-relative overflow-hidden" style={{ flex: 1, borderRadius: '0.5rem' }}>
              <Image
                src={strandcabinesData.media.collageBottom[3].path}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 32vw, 33vw"
                alt={strandcabinesData.media.collageBottom[3].alt}
              />
            </div>
            <div className="position-relative overflow-hidden" style={{ flex: 1, borderRadius: '0.5rem' }}>
              <Image
                src={strandcabinesData.media.collageBottom[4].path}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 32vw, 33vw"
                alt={strandcabinesData.media.collageBottom[4].alt}
              />
            </div>
          </div>

          <div className="d-flex flex-column gap-2" style={{ flex: 1 }}>
            <div className="position-relative overflow-hidden" style={{ flex: 2, borderRadius: '0.5rem 1rem 0.5rem 0.5rem' }}>
              <Image
                src={strandcabinesData.media.collageBottom[5].path}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 32vw, 33vw"
                alt={strandcabinesData.media.collageBottom[5].alt}
              />
            </div>
            <div className="position-relative overflow-hidden" style={{ flex: 1, borderRadius: '0.5rem 0.5rem 1rem 0.5rem' }}>
              <Image
                src={strandcabinesData.media.collageBottom[6].path}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 32vw, 33vw"
                alt={strandcabinesData.media.collageBottom[6].alt}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}