import Image from 'next/image';
import dezeehut2 from "../../public/dezeehut2.png";
import dezeehutBottom from "../../public/dezeehut-bottom.jpg";

export default function StandplaatsPage() {
  return (
    <div>
       {/* HEADER */}
      <section className="section-block-tight">
        <div
          className="w-100 rounded-4 text-white d-flex flex-column align-items-center justify-content-center text-center px-4 py-3 py-md-5"
          style={{ minHeight: 'clamp(120px, 20vw, 220px)', background: 'linear-gradient(135deg, #DF540A 0%, #f5a26b 100%)' }}
        >
          <h1>Standplaatsen</h1>
          <p className="mb-0">Jouw plekje op het strand.</p>
        </div>
        <div className="d-flex gap-2 mt-2" style={{ height: 'clamp(120px, 20vw, 220px)' }}>
          <div className="position-relative overflow-hidden rounded-4" style={{ flex: 1 }}>
            <Image src="/dezeehut20.jpg" fill style={{ objectFit: 'cover' }} sizes="50vw" priority loading="eager" alt="Standplaats 1" />
          </div>
          <div className="position-relative overflow-hidden rounded-4" style={{ flex: 1 }}>
            <Image src="/dezeehut21.jpg" fill style={{ objectFit: 'cover' }} sizes="50vw" loading="eager" alt="Standplaats 2" />
          </div>
        </div>
      </section>

      {/* SECTIE 2 */}
      <section className="container section-block">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-4">
            <p>Afhankelijk in welke zone je een cabine wil huren kan je een standplaats bij het stad of bij ons aanvragen.</p>
          </div>
        </div>
        <div className="row g-4 mb-4">
          <div className="col-12 col-md">
            <div className="h-100 bg-prim rounded-4">
              <h2>Standplaatsen alle zones</h2>
              <p>Voor alle zones 1 tem 6 kan u een standplaats huren bij het stad, inschrijven kan via <a className="standplaats-underlined-link" href="https://www.oostende.be/strandcabines" target="_blank" rel="noopener noreferrer">www.oostende.be/strandcabines</a>. Dit kan jaarlijks vanaf 1 oktober tot en met 31 december. Eens u een plaats is toegekend kunt u zich tot ons wenden voor de huur van een strandcabine.</p>
            </div>
          </div>
          <div className="col-12 col-md">
            <div className="h-100 bg-sec rounded-4">
              <h2>Standplaats in Mariakerke - zone 4</h2>
              <p>Voor zone 4 in Mariakerke kunt u eveneens, indien er een plaats vrij komt, bij ons een standplaats huren. Stuur een mail naar <a className="standplaats-underlined-link" href="mailto:michel@dezeehut.be">michel@dezeehut.be</a> met uw adres en telefoon en voorkeur van ligging.</p>
            </div>
          </div>
        </div>
        <div className="mb-4 bg-thr rounded-4">
          <h2>Start seizoen</h2>
          <p>Het strandseizoen nadert van zodra het strand “genivelleerd” is door het stad. Vanaf dan kan gestart worden met het plaatsen van de cabines. Dit is meestal in de tweede helft van maart.</p>
        </div>
      </section>

      <section className="standplaats-footer-image-wrap" aria-hidden="true">
        <div className="standplaats-footer-image-media">
          <Image
            src={dezeehutBottom}
            fill
            sizes="100vw"
            priority
            loading="eager"
            style={{ objectFit: 'cover' }}
            alt=""
          />
        </div>
      </section>
    </div>
  );
}
