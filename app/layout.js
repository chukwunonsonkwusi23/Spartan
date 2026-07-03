import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "300 Spartans Security",
  description: "Integrated protection, mobility, and security services."
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
