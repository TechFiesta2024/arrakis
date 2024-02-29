
import "../styles/globals.css";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Footer } from "@/components/index ";
import AuthContextProvider from "@/context/AuthContext";
import Loading from "./loading";

const Navbar = dynamic(() => import('@/components/Navbar/index'), { ssr: false })


export const metadata = {
  title: "TechFiesta'24",
  description: "Something great awaits",
  icons:
  {
    icon: "favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body__container font-generalsans bg-black text-red border-yellowish">
        <AuthContextProvider>
            <Navbar />
            {children}
            <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
