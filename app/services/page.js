import Image from "next/image";
import Link from "next/link";
import { serviceItems } from "./data";

export default function ServicesPage() {
  return (
    <main className="service-page services-list-page">
      <section className="breadcrumb-row">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Our services</span>
        </nav>
        <div className="back-link-row">
          <Link href="/" className="back-link">
            ← Back to Home
          </Link>
        </div>
      </section>
      <section className="service-hero">
        <div className="service-hero-copy">
          <p>Our Services</p>
          <h1>Security, mobility, and premium transport built for every mission.</h1>
          <p>
            Explore our specialised service capabilities, from physical protection and secure travel to drone operations,
            training, and luxury vehicle rental.
          </p>
        </div>
        <div className="service-hero-image">
          <Image
            src="/images/about us.jpeg"
            alt="300 Spartans security service hero"
            width={840}
            height={720}
            className="service-hero-img"
            priority
          />
        </div>
      </section>

      <section className="service-grid-block">
        <div className="section-heading">
          <p>What we offer</p>
          <h2>Choose the mobility, protection, or training solution that fits your mission.</h2>
        </div>
        <div className="services-list-grid">
          {serviceItems.map((service) => (
            <Link key={service.slug} href={service.href} className="service-link-card">
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <span>View service</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
