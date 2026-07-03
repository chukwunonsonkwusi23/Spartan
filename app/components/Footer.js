import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Image src="/images/logo.jpg" alt="300 Spartans logo" width={82} height={82} />
          <h3>+234-808-160-2646</h3>
          <p>19B, Mobolaji Bank Anthony Way, Ikeja, Lagos, Nigeria.</p>
        </div>

        <div>
          <h4>About 300 Spartans</h4>
          <Link href="/">Home</Link>
          <Link href="/about-us">About us</Link>
          <Link href="/about-us">Company Overview</Link>
          <Link href="/services">Our Services</Link>
        </div>

        <div>
          <h4>Our solutions</h4>
          <Link href="/services/physical-security">Physical-security</Link>
          <Link href="/services/secured-mobility">Secured-mobility</Link>
          <Link href="/services/mobile-car-rental">Mobile Car Rental</Link>
          <Link href="/services/luxury-car-rental">Luxury Car Rental</Link>
        </div>

        <div>
          <h4>Follow us</h4>
          <div className="socials">
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="https://wa.me/2347081352918" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Copyright© 2026 300 Spartans | All rights reserved</span>
        <span>Terms of Use</span>
        <span>Privacy Policy</span>
      </div>
    </footer>
  );
}
