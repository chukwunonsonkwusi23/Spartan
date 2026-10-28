import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, MessageCircle, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <div>
          <Image src="/images/logo.jpg" alt="300 Spartans logo" width={72} height={72} />
          <h3>+234-906-498-2248</h3>
          <p>19B, Mobolaji Bank Anthony Way, Ikeja, Lagos, Nigeria.</p>
        </div>

        <div>
          <h4>About 300 Spartans</h4>
          <Link href="/">Home</Link>
          <Link href="/about-us">About us</Link>
          <Link href="/about-us">Company Overview</Link>
          <Link href="/services">Our Services</Link>
          <a href="tel:+2349064982248">Call +2349064982248 </a>
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
            <a href="https://www.instagram.com/300_spartans_security_company?exln=ZzJkZTdjaTBkcTAx&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://x.com/spartansbouncer?s=11" target="_blank" rel="noreferrer" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="https://wa.me/2349064982248?text=Hello%20300%20Spartans%2C%20I%20would%20like%20to%20enquire%20about%20your%20services." target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
            <a href="https://www.tiktok.com/@300.spartans.bouncers?_r=1&_t=ZS-9AuYRfwu2le" target="_blank" rel="noreferrer" aria-label="TikTok">
              <FaTiktok size={18} />
            </a>
            <a href="https://youtube.com/@300spartanssecuritycompany?si=e3oWy8YMn7KuSPfR" target="_blank" rel="noreferrer" aria-label="YouTube">
              <Youtube size={18} />
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
