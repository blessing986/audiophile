import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";
import CartModal from "../components/CartModal";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Audiophile",
  description:
    "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        <CartProvider>
        <Navbar />      
          {children}
          <CartModal />       
          <Footer />
          </CartProvider>
      </body>
    </html>
  );
}
