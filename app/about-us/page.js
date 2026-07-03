import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <main className="info-page about-us-page">
      <section className="breadcrumb-row about-us-breadcrumb">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Company Overview</span>
        </nav>
      </section>

      <section className="about-us-hero">
        <div className="about-us-hero-copy">
          <p>Company Overview</p>
          <h1>Why Choose 300 Spartans Bouncer and Bodyguard Security Company Ltd.?</h1>
          <p>
            At 300 Spartans Bouncer and Bodyguard Security Company Ltd., security is more than a service—it is our
            commitment to protecting lives, properties, businesses, and events with professionalism, integrity,
            and excellence.
          </p>
        </div>
        <div className="about-us-hero-image">
          <Image
            src="/images/Men on suit 4.jpg"
            alt="Security team briefing"
            fill
            sizes="(max-width: 900px) 100vw, 60vw"
            priority
          />
        </div>
      </section>

      <section className="about-us-grid">
        <article className="info-card">
          <div className="info-card-media">
            <Image src="/images/Men on suit 6.jpg" alt="Trained security personnel" fill sizes="100vw" />
          </div>
          <div className="info-card-text">
            <span>Our Competitive Advantage</span>
            <h3>Highly Trained Security Personnel</h3>
            <p>
              Our team consists of disciplined, well-trained, and experienced bouncers, bodyguards, and security
              operatives who are equipped to handle a wide range of security challenges professionally.
            </p>
          </div>
        </article>

        <article className="info-card">
          <div className="info-card-media">
            <Image src="/images/Men on suit 7.jpg" alt="Professional security officers" fill sizes="100vw" />
          </div>
          <div className="info-card-text">
            <span>Our Competitive Advantage</span>
            <h3>Professionalism and Reliability</h3>
            <p>
              We maintain the highest standards of conduct, punctuality, confidentiality, and customer service,
              ensuring our clients receive dependable security solutions at all times.
            </p>
          </div>
        </article>

        <article className="info-card">
          <div className="info-card-media">
            <Image src="/images/Men on suit 8.jpg" alt="Tailored security planning" fill sizes="100vw" />
          </div>
          <div className="info-card-text">
            <span>Our Competitive Advantage</span>
            <h3>Tailored Security Solutions</h3>
            <p>
              We understand that every client has unique security needs. We provide customized security plans designed
              to meet specific requirements for individuals, businesses, organizations, and events.
            </p>
          </div>
        </article>

        <article className="info-card">
          <div className="info-card-media">
            <Image src="/images/Men on suit 9.jpg" alt="Rapid security response team" fill sizes="100vw" />
          </div>
          <div className="info-card-text">
            <span>Our Competitive Advantage</span>
            <h3>Rapid Response Capability</h3>
            <p>
              Our personnel are trained to assess risks quickly and respond effectively to emergencies, helping to
              prevent incidents before they escalate.
            </p>
          </div>
        </article>

        <article className="info-card">
          <div className="info-card-media">
            <Image src="/images/Men on suit 10.jpg" alt="Trusted security service" fill sizes="100vw" />
          </div>
          <div className="info-card-text">
            <span>Our Competitive Advantage</span>
            <h3>Trusted by Businesses and Individuals</h3>
            <p>
              We have built our reputation through dedication, consistency, and a strong commitment to client
              satisfaction. Our clients trust us because we deliver results.
            </p>
          </div>
        </article>

        <article className="info-card">
          <div className="info-card-media">
            <Image src="/images/Men on suit 11.jpg" alt="Event security specialists" fill sizes="100vw" />
          </div>
          <div className="info-card-text">
            <span>Our Competitive Advantage</span>
            <h3>Event Security Specialists</h3>
            <p>
              From corporate events and concerts to weddings, private parties, and VIP gatherings, we provide
              professional crowd management and access control services that ensure safety and order.
            </p>
          </div>
        </article>

        <article className="info-card">
          <div className="info-card-media">
            <Image src="/images/Men on suit 12.jpg" alt="Executive protection services" fill sizes="100vw" />
          </div>
          <div className="info-card-text">
            <span>Our Competitive Advantage</span>
            <h3>Executive and VIP Protection</h3>
            <p>
              Our bodyguard services offer discreet, professional, and reliable protection for executives, dignitaries,
              celebrities, business owners, and high-profile individuals.
            </p>
          </div>
        </article>

        <article className="info-card">
          <div className="info-card-media">
            <Image src="/images/PHOTO-2026-06-16-13-12-37 3.jpg" alt="Commitment to excellence" fill sizes="100vw" />
          </div>
          <div className="info-card-text">
            <span>Our Competitive Advantage</span>
            <h3>Commitment to Excellence</h3>
            <p>
              We continuously improve our services through training, modern security practices, and operational
              excellence to provide world-class protection.
            </p>
          </div>
        </article>
      </section>

      <section className="about-us-summary">
        <div className="summary-card">
          <h2>Our Mission</h2>
          <p>
            To provide exceptional security services that safeguard lives, assets, and reputations while delivering
            peace of mind to every client we serve.
          </p>
        </div>

        <div className="summary-card">
          <h2>Our Vision</h2>
          <p>
            To become one of the most trusted and respected security service providers in Nigeria and beyond through
            professionalism, integrity, and excellence.
          </p>
        </div>

        <div className="summary-card">
          <h2>Your Safety Is Our Priority</h2>
          <p>
            When you choose 300 Spartans Bouncer and Bodyguard Security Company Ltd., you are choosing strength,
            professionalism, vigilance, and peace of mind.
          </p>
        </div>

        <div className="summary-highlights">
          <p className="highlight">Protecting What Matters Most.</p>
        </div>
      </section>
    </main>
  );
}
