import localFont from "next/font/local";
import "./globals.css";

import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const geistComfort = localFont({
  src: "./fonts/ComforterRegularVF.woff",
  variable: "--font-comforter-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Numerorum",
  description: "numerorum",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistComfort.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
