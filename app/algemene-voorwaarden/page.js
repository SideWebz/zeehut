import metadataContent from "../../data/site/metadata.json";
import termsData from "../../data/pages/algemene-voorwaarden.json";

export const metadata = metadataContent.pages.algemeneVoorwaarden;

export default function AlgemeneVoorwaardenPage() {
  return (
    <section className="container section-block">
      <h1>Algemene Voorwaarden</h1>
      <p>
        {termsData.paragraphs.intro}
      </p>

      <h2>Reservaties en aanvragen</h2>
      <p>
        {termsData.paragraphs.reservations}
      </p>

      <h2>Prijzen en afspraken</h2>
      <p>
        {termsData.paragraphs.pricing}
      </p>

      <h2>Aansprakelijkheid</h2>
      <p>
        {termsData.paragraphs.liability}
      </p>

      <h2>Privacy</h2>
      <p>
        {termsData.paragraphs.privacy}
      </p>

      <h2>Contact</h2>
      <p>
        {termsData.paragraphs.contactPrefix}
        {' '}<a href="mailto:michel@dezeehut.be">michel@dezeehut.be</a> of
        {' '}<a href="tel:+32475888999">+32 475 88 89 99</a>.
      </p>
    </section>
  );
}
