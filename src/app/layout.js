
import { Footer, Navbar } from "@/components/index ";
import "../styles/globals.css";

export const metadata = {
  title: "TechFiesta'24",
  description: "Something great awaits",
  icons:
  {
    icon: "./favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body__container font-generalsans bg-black text-red border-yellowish">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
