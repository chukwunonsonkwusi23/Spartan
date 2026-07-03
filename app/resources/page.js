import Image from "next/image";
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <main className="resources-page">
      <section className="breadcrumb-row">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Resources & Insights</span>
        </nav>
      </section>

      <section className="resources-hero">
        <div className="resources-hero-copy">
          <p>Resources & Insights</p>
          <h1>Actionable guidance for security leaders who need clarity, control, and confidence.</h1>
          <p>
            Every insight on this page is designed to help your organisation move from reactive protection to
ahead-of-the-curve planning. We combine operational expertise, client intelligence, and strategic foresight
into reports, briefings and practical analysis that support safer decisions across people, transport, and high-risk venues.
          </p>
          <div className="resources-hero-actions">
            <Link href="/services" className="secondary-link">
              Explore our services
            </Link>
            <Link href="/about-us" className="primary-link">
              Learn about our approach
            </Link>
          </div>
        </div>

        <div className="resources-hero-image">
          <Image
            src="/images/about us.jpeg"
            alt="Client company security briefing"
            width={960}
            height={720}
            className="resources-hero-img"
            priority
          />
        </div>
      </section>

      <section className="resources-overview">
        <div className="section-heading">
          <p>Client-focused analysis</p>
          <h2>We deliver research that reflects the real needs of your business.</h2>
        </div>
        <div className="resources-copy-block">
          <p>
            300 Spartans partners with companies that require discreet, dependable and intelligence-led
security programs. This section presents the insights that matter most for high-profile clients,
complex operations, and executive travel. Our writing explains risk clearly, then connects it to the practical
steps your team can take right now.
          </p>
        </div>
      </section>

      <section className="resources-grid">
        <article className="resource-card">
          <span className="resource-pill">Executive insight</span>
          <h3>Security posture for premium businesses</h3>
          <p>
            Learn how established brands and client-facing companies can balance vigilance with guest experience.
            Our guidance covers perimeter readiness, access control, and protective services that preserve reputation
            while keeping every stakeholder secure.
          </p>
        </article>

        <article className="resource-card">
          <span className="resource-pill">Operational advisory</span>
          <h3>Resilience across travel and transport</h3>
          <p>
            From secure mobility to event logistics, this insight describes the protocols and partnership models
            that support safe, efficient movement. We explain when and how to align vehicle operations, escort teams,
            and client communication for flawless execution.
          </p>
        </article>

        <article className="resource-card">
          <span className="resource-pill">Client briefing</span>
          <h3>Protecting reputation in high-stakes environments</h3>
          <p>
            Reputation risk is security risk. Our perspective helps you anticipate exposure, control sensitive
            situations, and deploy the right personnel so your clients and stakeholders trust every decision.
          </p>
        </article>
      </section>

      <section className="resources-insight-panel">
        <div className="resources-insight-copy">
          <h2>Why this page matters for your business</h2>
          <p>
            In a world where threats emerge faster than ever, your security strategy must be both proactive and
            practical. The insights here are designed to translate intelligence into action—helping you identify
            the right priorities, allocate resources effectively, and protect people with greater certainty.
          </p>
          <ul>
            <li>Clear frameworks for risk assessment and operational readiness</li>
            <li>Guidance on executive movement, venue protection and client hospitality</li>
            <li>Advice for integrating technology into smart security workflows</li>
            <li>Examples of resilience planning for premium services and high-value assignments</li>
          </ul>
        </div>

        <div className="resources-insight-card">
          <span>Featured insight</span>
          <h3>Building trust through consistent protection</h3>
          <p>
            High-performing security programs earn confidence by being reliable, visible, and responsive. Every recommendation
            we share is informed by client expectations, regulatory obligations and the realities of modern field work.
          </p>
          <Link href="/services" className="secondary-link">
            Discover our service approach
          </Link>
        </div>
      </section>
    </main>
  );
}
