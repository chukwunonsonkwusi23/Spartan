"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { serviceItems } from "./services/data";
import {
  BookOpen,
  Calendar,
  Camera,
  Car,
  CarFront,
  ChevronDown,
  Cpu,
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Navigation2,
  Phone,
  Send,
  ShieldCheck,
  Star,
  Truck,
  Twitter,
  Users,
  X
} from "lucide-react";

const navGroups = [
  {
    label: "About us",
    items: [
      {
        label: "Company Overview",
        href: "/about-us"
      }
    ]
  },
  {
    label: "Our services",
    items: serviceItems.map((service) => ({
      label: service.title,
      href: service.href
    }))
  }
];

const services = serviceItems.map((item) => {
  let Icon = Users;

  if (item.slug === "physical-security") Icon = ShieldCheck;
  if (item.slug === "secured-mobility") Icon = Truck;
  if (item.slug === "mobile-car-rental") Icon = Car;
  if (item.slug === "professional-drone-operative-service") Icon = Camera;
  if (item.slug === "security-trainings") Icon = BookOpen;
  if (item.slug === "suv-car-rental") Icon = CarFront;
  if (item.slug === "secure-mobility-event-services") Icon = Navigation2;
  if (item.slug === "luxury-car-rental") Icon = Star;

  return { ...item, Icon };
});

const sliderImages = [
  "/images/Men on suit 1.jpg",
  "/images/Men on suit 5.jpg",
  "/images/Men on suit 7.jpg",
  "/images/Men on suit 11.jpg",
  "/images/Men on suit 4.jpg",
  "/images/SPARTANS SECURITY.jpeg"
];

const homepageVideos = [
  "/videos/VIDEO-2026-06-16-13-12-38.mp4",
  "/videos/Video Show.mp4"
];

const testimonials = [
  {
    quote:
      "Their consistency continues to impress me. Every engagement reflects professionalism, expertise, and genuine commitment to service.",
    name: "Fahreed Abiola",
    location: "Victoria Island, Lagos",
    image: "/images/couple.jpg"
  },
  {
    quote:
      "The customer service is exceptional; proactive, responsive, and personal. Their solutions have streamlined our operations.",
    name: "Sandra Okoye",
    location: "Abuja, FCT",
    image: "/images/img.jpg"
  },
  {
    quote:
      "They handled every aspect of our engagement with precision and warmth. I have confidence knowing the team is always reachable.",
    name: "Jide Adams",
    location: "Ikoyi, Lagos",
    image: "/images/family pic.jpg"
  }
];

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [videoSlideIndex, setVideoSlideIndex] = useState(0);
  const [formStatus, setFormStatus] = useState("");

  const whatsappNumber = "2349064982248";
  const phoneNumber = "+2349064982248";

  // Form handling local states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((index) => (index + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formStatus) setFormStatus("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const messageText = `Hello 300 Spartans, I would like to request a service.%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `*Service Required:* ${encodeURIComponent(formData.service)}%0A` +
      `*Message Details:* ${encodeURIComponent(formData.message)}`;

    setFormStatus("Your enquiry is being prepared in WhatsApp.");
    window.open(`https://wa.me/${whatsappNumber}?text=${messageText}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="300 Spartans home">
          <Image src="/images/logo.jpg" alt="300 Spartans" width={82} height={82} priority />
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          <Menu size={24} />
        </button>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
          <button className="close-menu" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={22} />
          </button>
          {navGroups.map((group) => (
            <div className="nav-item" key={group.label}>
              <button onClick={() => setOpenDropdown(openDropdown === group.label ? null : group.label)}>
                {group.label} <ChevronDown size={16} />
              </button>
              <div className={`dropdown ${openDropdown === group.label ? "is-open" : ""}`}>
                {group.items.map((item) => {
                  const label = typeof item === "string" ? item : item.label;
                  const href = typeof item === "string" ? `#${slugify(item)}` : item.href;
                  const description = typeof item === "object" ? item.description : null;

                  return (
                    <a href={href} key={label} onClick={() => setMenuOpen(false)} className={description ? "dropdown-service-item" : ""}>
                      <span>{label}</span>
                      {description ? <small>{description}</small> : null}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
          <a href="/resources">Resources & Insights</a>
          <a href="#contact">Contact Us</a>
          <a href="#request" className="request-pill">
            Request a service
          </a>
        </nav>
      </header>
<div style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden', position: 'relative' }}></div>
      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <span className="hero-kicker">Security services in Lagos and across Nigeria</span>
            <h1>SECURE PEOPLE. PROTECT ASSETS. MOVE WITH CONFIDENCE.</h1>
            <p>
              300 Spartans delivers dependable protection, secure mobility, and discreet support for
              businesses, families, and events that cannot afford risk. Our teams help you stay ahead
              of threats while keeping operations smooth and professional.
            </p>
            <div className="hero-actions">
              <a href="#request" className="primary-link">
                Request a quote
              </a>
              <a href={`tel:${phoneNumber}`} className="secondary-link">
                Call now
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello 300 Spartans, I would like to enquire about your security services.")}`}
                target="_blank"
                rel="noreferrer"
                className="secondary-link whatsapp-link"
              >
                WhatsApp
              </a>
            </div>
            <div className="hero-meta" aria-label="Trust indicators">
              <span>Response-ready teams</span>
              <span>Professional support</span>
              <span>Trusted across Lagos</span>
            </div>
          </div>

          <div className="hero-media" aria-label="Security service imagery">
            <img
              src="/images/Men on suit 4.jpg"
              alt="Security professionals"
              className="hero-image"
            />
          </div>
        </section>

        <section className="trust-strip" aria-label="Key trust points">
          <article className="trust-item">
            <strong>24/7</strong>
            <span>Operational support</span>
          </article>
          <article className="trust-item">
            <strong>Client-first</strong>
            <span>Discreet, professional service</span>
          </article>
          <article className="trust-item">
            <strong>Lagos-based</strong>
            <span>Local knowledge and rapid response</span>
          </article>
        </section>

        <section className="intelligence-section">
          <div className="intelligence-video">
            <div className="intelligence-media-stage">
              <video
                key={homepageVideos[videoSlideIndex]}
                autoPlay={videoSlideIndex === 0}
                controls
                loop
                muted
                playsInline
                poster={videoSlideIndex === 0 ? "/images/Men on suit 5.jpg" : "/images/SPARTANS SECURITY.jpeg"}
              >
                <source src={homepageVideos[videoSlideIndex]} type="video/mp4" />
              </video>
            </div>
            <div className="homepage-video-pagination" aria-label="Choose homepage video">
              {homepageVideos.map((video, index) => (
                <button
                  type="button"
                  key={video}
                  aria-label={index === 0 ? "Show featured video" : "Show Video Show"}
                  aria-current={index === videoSlideIndex}
                  onClick={() => setVideoSlideIndex(index)}
                >
                  <span />
                </button>
              ))}
            </div>
          </div>
          <div className="intelligence-copy">
            <article>
              <h2>Native Intelligence, Reimagined.</h2>
              <p>
                300 Spartans stands at the intersection of intuition and technology. We transform
                local understanding into dependable protection. We monitor, adapt, and respond to
                every threat that challenges safety and progress.
              </p>
            </article>
            <article className="gold-card">
              <h2>Protecting what matters, in every moment that matters.</h2>
              <p>
                We combine immediacy with intelligence, acting fast when it counts while designing
                long-term strategies that strengthen safety, resilience, and well-being.
              </p>
            </article>
          </div>
        </section>

        <section className="suit-slider" aria-label="Security team photos">
          <div className="slider-window">
            {sliderImages.map((image, index) => (
              <Image
                key={image}
                src={image}
                alt={
                  image === "/images/SPARTANS SECURITY.jpeg"
                    ? "Two 300 Spartans officers at a security post"
                    : image === "/images/Men on suit 4.jpg"
                      ? "Two 300 Spartans security officers at an event"
                      : "300 Spartans security team"
                }
                fill
                sizes="(max-width: 768px) 100vw, 86vw"
                className={index === slideIndex ? "is-active" : ""}
              />
            ))}
          </div>
          <div className="slider-dots" aria-label="Choose security team photo">
            {sliderImages.map((image, index) => (
              <button
                type="button"
                className={index === slideIndex ? "is-active" : ""}
                key={image}
                aria-label={`Show security team photo ${index + 1}`}
                aria-current={index === slideIndex}
                onClick={() => setSlideIndex(index)}
              >
                <span />
              </button>
            ))}
          </div>
        </section>

        <section className="value-section" aria-label="Why choose 300 Spartans">
          <div className="section-heading">
            <p>Why choose us</p>
            <h2>Protection built around clarity, control, and reliable execution.</h2>
          </div>
          <div className="value-grid">
            <article className="value-card">
              <span>01</span>
              <h3>Practical intelligence</h3>
              <p>We assess risk in real-world conditions and build security plans that work in motion.</p>
            </article>
            <article className="value-card">
              <span>02</span>
              <h3>Professional presence</h3>
              <p>Our teams are trained to be calm, visible, and effective in high-pressure situations.</p>
            </article>
            <article className="value-card">
              <span>03</span>
              <h3>Tailored coverage</h3>
              <p>Every engagement is shaped around your property, people, schedule, and operational needs.</p>
            </article>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-heading">
            <p>Our services</p>
            <h2>
              Every need is different. That's why our protection is personal.
            </h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" id={slugify(service.title)} key={service.title}>
                <div className="service-card-icon">
                  <service.Icon size={28} />
                </div>
                <div className="service-copy service-copy-card">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={service.href} className="service-link-button">
                    View service
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="serve" id="serve">
          <div className="section-heading">
            <p>Who we serve</p>
            <h2>Protection for individuals, enterprises, public institutions, and major operations.</h2>
          </div>
          <ul>
            <li>Corporate offices and commercial facilities</li>
            <li>High-value individuals and family estates</li>
            <li>Government and public-sector environments</li>
            <li>Events, transport routes, and active operations</li>
          </ul>
        </section>

        <section className="testimonials" id="resources">
          <div className="section-heading align-left">
            <p>WHAT WE LOVE TO HEAR FROM OUR CLIENTS</p>
            <h2>The best part of our work is hearing how we've made a difference.</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <p>"{item.quote}"</p>
                <div>
                  <Image src={item.image} alt={item.name} width={58} height={58} />
                  <span>
                    <strong>{item.name}</strong>
                    {item.location}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* RESTRUCTURED FORM TO MATCH PREMIUM LAYOUT */}
        <section className="request-section" id="request">
          <h2>Request Service</h2>
          <p>Get in touch with our team for enquiries or consultations.</p>
          
          <form onSubmit={handleFormSubmit} className="request-form">
            <div className="form-group">
              <label htmlFor="name">Your name <b>*</b></label>
              <input 
                type="text" 
                id="name"
                name="name"
                placeholder="Enter name" 
                required 
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email address <b>*</b></label>
              <input 
                type="email" 
                id="email"
                name="email"
                placeholder="Enter Email" 
                required 
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group full">
              <label htmlFor="service">Select service(s) <b>*</b></label>
              <select 
                id="service"
                name="service"
                required 
                value={formData.service}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Choose service(s)
                </option>
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="form-group full">
              <label htmlFor="message">How can we help you? <b>*</b></label>
              <textarea 
                id="message"
                name="message"
                placeholder="Enter message" 
                required 
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            
            <button type="submit">
              <Send size={17} /> Send request
            </button>
            {formStatus ? (
              <p className="form-status" role="status">
                {formStatus}
              </p>
            ) : null}
          </form>
        </section>
      </main>
    </>
  );
}