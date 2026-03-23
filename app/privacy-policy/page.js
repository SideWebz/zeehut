export const metadata = {
  title: "Privacy Policy",
  description:
    "Lees hoe De Zeehut persoonsgegevens verwerkt voor reservaties, aanvragen en dienstverlening volgens GDPR.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="container section-block">
      <h1>Privacy Policy</h1>
      <p>
        Bij De Zeehut respecteren we jouw privacy. Deze website verzamelt geen onnodige
        persoonsgegevens en gebruikt geen tracking voor commerciële doeleinden.
      </p>

      <h2>Welke gegevens we verwerken</h2>
      <p>
        We bewaren enkel gegevens die je zelf aan ons bezorgt, bijvoorbeeld via e-mail of telefoon
        voor reservaties, vragen of herstellingen.
      </p>

      <h2>Doel van verwerking</h2>
      <p>
        We gebruiken deze gegevens alleen om je aanvraag te behandelen, contact op te nemen en onze
        dienstverlening uit te voeren.
      </p>

      <h2>Bewaartermijn</h2>
      <p>
        Gegevens worden niet langer bewaard dan nodig is voor de opvolging van je aanvraag of om aan
        wettelijke verplichtingen te voldoen.
      </p>

      <h2>Delen met derden</h2>
      <p>
        We verkopen of delen jouw gegevens niet met derden, behalve wanneer dit wettelijk verplicht
        is.
      </p>

      <h2>Jouw rechten (GDPR)</h2>
      <p>
        Je hebt recht op inzage, correctie, verwijdering en beperking van je persoonsgegevens. Je kan
        hiervoor contact opnemen via <a href="mailto:michel@dezeehut.be">michel@dezeehut.be</a>.
      </p>
    </section>
  );
}
