import Navigation from "./components/navigation";
import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"] }); // IMPORT ARABIC LANGUAGE FONT

export const metadata: Metadata = {
  title: "Dr. Sawsan Sweiss Dental Clinic  |  عيادة الدكتورة سوسن صويص",
  description: "Dr. Sawsan Sweiss Dental Clinic Webpage - موقع عيادة الدكتورة سوسن صويص",
};

export default function RootLayout({
  children,
  lang = "en", // OPTIONAL ARGUMENTS
  dir = "ltr", // OPTIONAL ARGUMENTS
}: Readonly<{  // TYPE OF PROPS
  children: React.ReactNode;
  lang?: string; // ? 
  dir?: string;  // ?
}>) {
  return (
    <html lang={lang} dir={dir}>
      <body className="{`${inter.className} ${cairo.className}`}">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
