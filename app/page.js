import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import homeData from "../data/pages/home.json";
import metadataContent from "../data/site/metadata.json";

export const metadata = metadataContent.pages.home;

export default function Home() {
  return (
    <div>
      <header className="w-100 text-center section-block-tight">
        <Image 
          src={logo} 
          alt="Logo" 
          width={1200} 
          height={300} 
          style={{ width: '100%', height: 'auto' }} 
          priority
        />
      </header>

      <section className="w-100 section-block-tight">
        <video 
          src={homeData.media.video}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-100 rounded-4"
          style={{ maxHeight: '650px', objectFit: 'cover' }}
        />
      </section>

      <section className="container section-block">
        <div className="row align-items-center">
          <div className="col-md-7 mb-3">
            <h1>Uw strandcabinehouder</h1>
            <p>{homeData.paragraphs.intro}</p>
            <Link href="/contact" className="btn btn-custom">Contacteer ons</Link>
          </div>
          <div className="col-md-5">
            <Image 
              src={homeData.media.images[0].path}
              width={400} 
              height={400} 
              style={{ width: '100%', height: 'auto', borderRadius: '1rem' }} 
              alt={homeData.media.images[0].alt}
            />
          </div>
        </div>
      </section>

      <section className="container section-block">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-center bg-light rounded-4 home-text-card" 
                 style={{ aspectRatio: '1 / 1' }}>
              <div>
                <p className="p-large">{homeData.paragraphs.services}</p>
                <Link href="/verhuur" className="btn btn-custom mt-3">Onze diensten</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="position-relative rounded-4 overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
              <Image 
                src={homeData.media.images[1].path}
                fill 
                style={{ objectFit: 'cover', borderRadius: '1rem' }} 
                sizes="(max-width: 768px) 100vw, 50vw"
                alt={homeData.media.images[1].alt}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="position-relative rounded-4 overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
              <Image 
                src={homeData.media.images[2].path}
                fill 
                style={{ objectFit: 'cover', borderRadius: '1rem' }} 
                sizes="(max-width: 768px) 100vw, 50vw"
                alt={homeData.media.images[2].alt}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-center bg-light rounded-4 home-text-card" 
                 style={{ aspectRatio: '1 / 1' }}>
              <div>
                <p className="p-large">{homeData.paragraphs.cabins}</p>
                <Link href="/strandcabines" className="btn btn-custom mt-3">Onze strandcabines</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-block">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1>Wie zijn wij?</h1>
            <p>{homeData.paragraphs.about}</p>
          </div>
        </div>
      </section>
    </div>
  );
}