import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import Content from "../public/content/page1.json"

export const metadata = {
  title: "Home",
  description:
    "De Zeehut in Oostende: verhuur van strandcabines met service, onderhoud en ondersteuning voor een ontspannen strandseizoen.",
};

export default function Home() {
  return (
    <div>

      {/* HEADER - LOGO */}
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

      {/* VIDEO BANNER */}
      <section className="w-100 section-block-tight">
        <video 
          src="https://blanckmedia-videos.b-cdn.net/DEZEEHUT/Websitevideo%20Dezeehut%20MP4.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-100 rounded-4"
          style={{ maxHeight: '650px', objectFit: 'cover' }}
        />
      </section>

      {/* SECTIE 1 - Tekst 8 / Foto 4 */}
      <section className="container section-block">
        <div className="row align-items-center">
          <div className="col-md-7 mb-3">
            <h1>Uw strandcabinehouder</h1>
            <p>{Content.texts[0].content}</p>
            <Link href="/contact" className="btn btn-custom">Contacteer ons</Link>
          </div>
          <div className="col-md-5">
            <Image 
              src={Content.images[0].hreff} 
              width={400} 
              height={400} 
              style={{ width: '100%', height: 'auto', borderRadius: '1rem' }} 
              alt="Foto DeZeeHut"
            />
          </div>
        </div>
      </section>

      {/* SECTIE 2 + 3 GECOMBINEERD - GRID VAN VIERKANTEN */}
      <section className="container section-block">
        <div className="row g-4">

          {/* Sectie 2 Tekstblok */}
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-center bg-light rounded-4 home-text-card" 
                 style={{ aspectRatio: '1 / 1' }}>
              <div>
                <p className="p-large">{Content.texts[1].content}</p>
                <Link href="/verhuur" className="btn btn-custom mt-3">Onze diensten</Link>
              </div>
            </div>
          </div>

          {/* Sectie 2 Foto */}
          <div className="col-md-6">
            <div className="position-relative rounded-4 overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
              <Image 
                src={Content.images[1].hreff} 
                fill 
                style={{ objectFit: 'cover', borderRadius: '1rem' }} 
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Foto DeZeeHut"
              />
            </div>
          </div>

          {/* Sectie 3 Foto */}
          <div className="col-md-6">
            <div className="position-relative rounded-4 overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
              <Image 
                src={Content.images[2].hreff} 
                fill 
                style={{ objectFit: 'cover', borderRadius: '1rem' }} 
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Foto DeZeeHut"
              />
            </div>
          </div>

          {/* Sectie 3 Tekstblok */}
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-center bg-light rounded-4 home-text-card" 
                 style={{ aspectRatio: '1 / 1' }}>
              <div>
                <p className="p-large">{Content.texts[2].content}</p>
                <Link href="/strandcabines" className="btn btn-custom mt-3">Onze strandcabines</Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTIE 4 - Enkel Tekst col-12 */}
      <section className="container section-block">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1>Wie zijn wij?</h1>
            <p>{Content.texts[3].content}</p>
          </div>
        </div>
      </section>

    </div>
  );
}