import Image from "next/image";
import dezeehut2 from "../../public/dezeehut2.png";

export default function Strandcabines() {
  return (
    <div>
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

      {/* SECTIE 1 - Tekst + Collage */}
      <section className="container section-block">
        <div className="row g-4 align-items-center">

          {/* Tekstblok links */}
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-center">
              <div>
                <h1>Voorbeeld strandcabine</h1>
                <p>Beschik je over een standplaats op het strand, we hebben hiervoor strandcabines ter beschikking. Deze voldoen aan de afmetingen opgelegd door stad Oostende!</p>
                <button className="btn btn-custom mt-3">Info & reservatie</button>
              </div>
            </div>
          </div>

          {/* Collage rechts */}
          <div className="col-md-6">
            <div
              className="d-flex gap-2 w-100"
              style={{ aspectRatio: '1 / 1' }}
            >
              
              {/* Kolom links */}
              <div className="d-flex flex-column gap-2" style={{ flex: 1 }}>
                <div className="position-relative overflow-hidden" style={{ flex: 1, borderRadius: '1rem 0.5rem 0.5rem 0.5rem' }}>
                  <Image src={dezeehut2} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 31vw, 16vw" alt="DeZeeHut 2"/>
                </div>
                <div className="position-relative overflow-hidden" style={{ flex: 1, borderRadius: '0.5rem 0.5rem 0.5rem 1rem' }}>
                  <Image src={dezeehut2} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 31vw, 16vw" alt="DeZeeHut 2"/>
                </div>
              </div>

              {/* Kolom midden */}
              <div className="d-flex flex-column gap-2" style={{ flex: 1 }}>
                <div className="position-relative overflow-hidden" style={{ flex: 1, borderRadius: '0.5rem' }}>
                  <Image src={dezeehut2} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 31vw, 16vw" alt="DeZeeHut 2"/>
                </div>
                <div className="position-relative overflow-hidden" style={{ flex: 1.35, borderRadius: '0.5rem' }}>
                  <Image src={dezeehut2} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 31vw, 16vw" alt="DeZeeHut 2"/>
                </div>
                <div className="position-relative overflow-hidden" style={{ flex: 1, borderRadius: '0.5rem' }}>
                  <Image src={dezeehut2} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 31vw, 16vw" alt="DeZeeHut 2"/>
                </div>
              </div>

              {/* Kolom rechts */}
              <div className="d-flex flex-column gap-2" style={{ flex: 1 }}>
                <div className="position-relative overflow-hidden" style={{ flex: 1, borderRadius: '0.5rem 1rem 0.5rem 0.5rem' }}>
                  <Image src={dezeehut2} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 31vw, 16vw" alt="DeZeeHut 2"/>
                </div>
                <div className="position-relative overflow-hidden" style={{ flex: 1, borderRadius: '0.5rem 0.5rem 1rem 0.5rem' }}>
                  <Image src={dezeehut2} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 31vw, 16vw" alt="DeZeeHut 2"/>
                </div>
              </div>

            </div>
          </div>

          <div className="col-md-6">
            <div className="position-relative rounded-4 overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
              <Image 
                src="/dezeehut2.png"
                fill 
                style={{ objectFit: 'cover', borderRadius: '1rem' }} 
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Foto DeZeeHut"
              />
            </div>
          </div>

          {/* Sectie 3 Tekstblok */}
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-center">
              <div>
                <h1>Ons design</h1>
                <p>Onze strandcabines zijn uitgerust met tafel en legplanken, een kapstok met verschillende haken en borstelklem. Op aanvraag kan een spiegel en/of gordijnroede worden voorzien.</p>
                <button className="btn btn-custom mt-3">Bekijk foto's</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIE 2 Full width collage*/}
      <section className="container-fluid section-block">
        <div className="w-100 d-flex gap-2" style={{ aspectRatio: '16 / 11' }}>
          <div className="d-flex flex-column gap-2" style={{ flex: 1 }}>
            <div className="position-relative overflow-hidden" style={{ flex: 1, borderRadius: '1rem 0.5rem 0.5rem 0.5rem' }}>
              <Image
                src={dezeehut2}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 32vw, 33vw"
                alt="DeZeeHut collage links boven"
              />
            </div>
            <div className="position-relative overflow-hidden" style={{ flex: 2, borderRadius: '0.5rem 0.5rem 0.5rem 1rem' }}>
              <Image
                src={dezeehut2}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 32vw, 33vw"
                alt="DeZeeHut collage links onder"
              />
            </div>
          </div>

          <div className="d-flex flex-column gap-2" style={{ flex: 1 }}>
            <div className="position-relative overflow-hidden" style={{ flex: 1, borderRadius: '0.5rem' }}>
              <Image
                src={dezeehut2}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 32vw, 33vw"
                alt="DeZeeHut collage midden boven"
              />
            </div>
            <div className="position-relative overflow-hidden" style={{ flex: 1, borderRadius: '0.5rem' }}>
              <Image
                src={dezeehut2}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 32vw, 33vw"
                alt="DeZeeHut collage midden midden"
              />
            </div>
            <div className="position-relative overflow-hidden" style={{ flex: 1, borderRadius: '0.5rem' }}>
              <Image
                src={dezeehut2}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 32vw, 33vw"
                alt="DeZeeHut collage midden onder"
              />
            </div>
          </div>

          <div className="d-flex flex-column gap-2" style={{ flex: 1 }}>
            <div className="position-relative overflow-hidden" style={{ flex: 2, borderRadius: '0.5rem 1rem 0.5rem 0.5rem' }}>
              <Image
                src={dezeehut2}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 32vw, 33vw"
                alt="DeZeeHut collage rechts boven"
              />
            </div>
            <div className="position-relative overflow-hidden" style={{ flex: 1, borderRadius: '0.5rem 0.5rem 1rem 0.5rem' }}>
              <Image
                src={dezeehut2}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 32vw, 33vw"
                alt="DeZeeHut collage rechts onder"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}