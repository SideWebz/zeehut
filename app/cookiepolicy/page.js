import metadataContent from "../../data/site/metadata.json";
import cookiePolicyData from "../../data/pages/cookiepolicy.json";

export const metadata = metadataContent.pages.cookiePolicy;

export default function CookiePolicyPage() {
  return (
    <section className="container section-block">
      <h1>Cookiepolicy</h1>
      <p>
        {cookiePolicyData.paragraphs.intro}
      </p>

      <h2>Essentiële cookies</h2>
      <p>
        {cookiePolicyData.paragraphs.essential}
      </p>

      <h2>Geen marketingcookies</h2>
      <p>
        {cookiePolicyData.paragraphs.marketing}
      </p>

      <h2>Cookiebeheer</h2>
      <p>
        {cookiePolicyData.paragraphs.management}
      </p>

      <h2>Vragen</h2>
      <p>
        {cookiePolicyData.paragraphs.questionsPrefix}
        {' '}<a href="mailto:michel@dezeehut.be">michel@dezeehut.be</a>.
      </p>
    </section>
  );
}
