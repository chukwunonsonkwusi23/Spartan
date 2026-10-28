import Link from "next/link";
import Image from "next/image";
import { getServiceBySlug } from "../data";
import ServiceMediaSlider from "../../components/ServiceMediaSlider";

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.service);

  if (!service) {
    return (
      <main className="service-page service-not-found">
        <section className="service-hero">
          <div className="service-hero-copy">
            <h1>Service Not Found</h1>
            <p>The requested service does not exist or is not available yet.</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="service-page service-detail-page">
      <section className="breadcrumb-row">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/services">Our services</Link>
          <span>/</span>
          <span>{service.title}</span>
        </nav>
        <div className="back-link-row">
          <Link href="/services" className="back-link">
            ← Back to Our services
          </Link>
        </div>
      </section>
      <section className="service-hero">
        <div className="service-hero-copy">
          <p>Service Overview</p>
          <h1>{service.title}</h1>
          <p>{service.summary}</p>
          <div className="hero-actions service-cta-actions">
            <a href="/#request" className="primary-link">
              Request a quote
            </a>
            <a href="tel:+2349064982248" className="secondary-link">
              Call now
            </a>
            <a
              href="https://wa.me/+2349064982248?text=Hello%20300%20Spartans%2C%20I%20want%20to%20request%20a%20quote%20for%20this%20service."
              target="_blank"
              rel="noreferrer"
              className="secondary-link whatsapp-link"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="service-hero-image">
          {service.video ? (
            <ServiceMediaSlider image={service.image} video={service.video} title={service.title} />
          ) : (
            <Image
              src={service.image}
              alt={service.title}
              width={720}
              height={560}
              className="service-hero-img"
              priority
            />
          )}
        </div>
      </section>

      <section className="service-copy-block">
        <div>
          <h2>{service.details}</h2>
        </div>
      </section>

      <section className="service-grid-block">
        <div className="section-heading">
          <p>Service Features</p>
          <h2>Rigorous coverage for every {service.title.toLowerCase()} requirement.</h2>
        </div>
        <div className="feature-grid">
          {service.features.map((item) => (
            <div className="feature-card" key={item}>
              <span>•</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="service-benefits">
        <div className="section-heading">
          <p>Why it matters</p>
          <h2>Protection that is proactive, visible, and ready to respond.</h2>
        </div>
        <div className="benefit-grid">
          {service.benefits.map((item) => (
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
