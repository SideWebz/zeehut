import metadataContent from "../../public/content/metadata.json";

export const metadata = metadataContent.pages.cookiePolicy;

export default function CookiePolicyPage() {
  return (
    <section className="container section-block">
      <h1>Cookiepolicy</h1>
      <p>
        Deze website gebruikt geen onnodige of commerciële trackingcookies.
      </p>

      <h2>Essentiële cookies</h2>
      <p>
        Enkel technisch noodzakelijke cookies kunnen gebruikt worden om de website correct te laten
        werken (bijvoorbeeld basisfunctionaliteit of beveiliging).
      </p>

      <h2>Geen marketingcookies</h2>
      <p>
        We gebruiken geen cookies voor advertentiedoeleinden, profielopbouw of externe tracking.
      </p>

      <h2>Cookiebeheer</h2>
      <p>
        Je kan cookies altijd beheren of verwijderen via de instellingen van je browser.
      </p>

      <h2>Vragen</h2>
      <p>
        Voor vragen over cookies kan je contact opnemen via
        {' '}<a href="mailto:michel@dezeehut.be">michel@dezeehut.be</a>.
      </p>
    </section>
  );
}
