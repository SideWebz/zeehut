import metadataContent from "../../data/site/metadata.json";
import privacyPolicyData from "../../data/pages/privacy-policy.json";

export const metadata = metadataContent.pages.privacyPolicy;

export default function PrivacyPolicyPage() {
  return (
    <section className="container section-block">
      <h1>Privacy Policy</h1>
      <p>
        {privacyPolicyData.paragraphs.intro}
      </p>

      <h2>Welke gegevens we verwerken</h2>
      <p>
        {privacyPolicyData.paragraphs.data}
      </p>

      <h2>Doel van verwerking</h2>
      <p>
        {privacyPolicyData.paragraphs.purpose}
      </p>

      <h2>Bewaartermijn</h2>
      <p>
        {privacyPolicyData.paragraphs.retention}
      </p>

      <h2>Delen met derden</h2>
      <p>
        {privacyPolicyData.paragraphs.sharing}
      </p>

      <h2>Jouw rechten (GDPR)</h2>
      <p>
        {privacyPolicyData.paragraphs.rightsPrefix} <a href="mailto:michel@dezeehut.be">michel@dezeehut.be</a>.
      </p>
    </section>
  );
}
