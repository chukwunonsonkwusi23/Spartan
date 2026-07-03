import Image from "next/image";
import Link from "next/link";

const features = [
  "Personal Protection Officers (Bodyguards)",
  "Armed and Unarmed Security Personnel",
  "Residential Estate Security Packages",
  "Crowd Control & Event Management",
  "Guarding Services (Static & Mobile)",
  "Quick Response Teams (QRTs)",
  "Retail Store/Outlet Security",
  "Access Control Personnel",
  "Supervisory Patrol Units"
];

const services = [
  {
    title: "Expert Protection Teams",
    description:
      "Highly trained personnel deployed for residential, corporate, and executive security assignments."
  },
  {
    title: "Integrated Site Security",
    description:
      "Mobile and static guarding supported by surveillance, access control, and rapid incident response."
  },
  {
    title: "Event & Venue Safeguarding",
    description:
      "Crowd control, entry screening, and risk-managed event protection for public and private gatherings."
  }
];

export default function PhysicalSecurityPage() {
  return (
    <main className="service-page physical-security-page">
      <section className="breadcrumb-row">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/services">Our services</Link>
          <span>/</span>
          <span>Physical Security</span>
        </nav>
        <div className="back-link-row">
          <Link href="/services" className="back-link">
            ← Back to Our services
          </Link>
        </div>
      </section>
      <section className="service-hero">
        <div className="service-hero-copy">
          <p>Our Services</p>
          <h1>Physical Security</h1>
          <p>
            Your safety begins with presence. Our trained professionals, smart
            surveillance, and advanced access control work together to safeguard
            your people and assets.
          </p>
          <a href="/#request" className="primary-link">
            Request a service
          </a>
        </div>
        <div className="service-hero-image">
          <Image
            src="/images/Men on suit 1.jpg"
            alt="Physical security team"
            width={720}
            height={560}
            className="service-hero-img"
            priority
          />
        </div>
      </section>

      <section className="service-copy-block">
        <div>
          <h2>Physical security remains the frontline of protection for homes, businesses, and institutions.</h2>
          <p>
            Our trained, insured officers do more than stand watch; they anticipate risk,
            manage events, and protect lives and property with precision. From retail
            stores and industrial facilities to government sites and VIP residences,
            our personnel deliver dependable, on-ground protection with professionalism
            and discretion.
          </p>
        </div>
      </section>

      <section className="service-grid-block">
        <div className="section-heading">
          <p>Products & Services</p>
          <h2>Rigorous coverage for every physical security requirement.</h2>
        </div>
        <div className="feature-grid">
          {features.map((item) => (
            <div className="feature-card" key={item}>
              <span>•</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="service-benefits">
        <div className="section-heading">
          <p>Why this matters</p>
          <h2>Protection that is proactive, visible, and ready to respond.</h2>
        </div>
        <div className="benefit-grid">
          {services.map((item) => (
            <article className="benefit-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
