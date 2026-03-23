export const metadata = {
  title: "Algemene Voorwaarden",
  description:
    "Lees de algemene voorwaarden van De Zeehut voor reservaties, verhuur, herstellingen en praktische afspraken.",
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <section className="container section-block">
      <h1>Algemene Voorwaarden</h1>
      <p>
        Deze voorwaarden zijn van toepassing op reservaties, verhuur en herstellingen via De Zeehut.
      </p>

      <h2>Reservaties en aanvragen</h2>
      <p>
        Een aanvraag via e-mail of telefoon geldt als contactaanvraag en is pas definitief na
        bevestiging door De Zeehut.
      </p>

      <h2>Prijzen en afspraken</h2>
      <p>
        Prijzen en praktische afspraken worden vooraf gecommuniceerd. Eventuele wijzigingen worden
        tijdig meegedeeld.
      </p>

      <h2>Aansprakelijkheid</h2>
      <p>
        De Zeehut doet het nodige om correcte informatie te tonen op de website, maar kan niet
        aansprakelijk gesteld worden voor onbedoelde fouten of tijdelijke onbeschikbaarheid.
      </p>

      <h2>Privacy</h2>
      <p>
        Persoonsgegevens worden verwerkt volgens de geldende GDPR-wetgeving. Zie ook onze
        privacy policy.
      </p>

      <h2>Contact</h2>
      <p>
        Voor vragen over deze voorwaarden kan je ons bereiken via
        {' '}<a href="mailto:michel@dezeehut.be">michel@dezeehut.be</a> of
        {' '}<a href="tel:+32475888999">+32 475 88 89 99</a>.
      </p>
    </section>
  );
}
