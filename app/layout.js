import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "300 Spartans Security | Security Services in Lagos, Nigeria",
  description: "300 Spartans provides professional security services in Lagos, secure mobility, luxury vehicle rental, drone operations, and security training across Nigeria.",
  keywords: [
    "security services in Lagos",
    "private security company in Nigeria",
    "secure mobility",
    "vehicle rental with security",
    "security training",
    "drone security services"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
