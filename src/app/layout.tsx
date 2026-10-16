import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GEMI - Gestión de Movilidad Inteligente | Guayaquil, Ecuador",
  description:
    "Coordinación inteligente de flotas, taxis amarillos y carreras de transporte seguro con tecnología avanzada. GESTION DE MOVILIDAD INTELIGENTE GEMI S.A.S. RUC: 0993405280001.",
  keywords:
    "transporte, movilidad inteligente, taxi amarillo, flota, Guayaquil, Ecuador, GEMI, coordinación transporte, logística",
  openGraph: {
    title: "GEMI - Gestión de Movilidad Inteligente",
    description:
      "Coordinación inteligente de flotas, taxis amarillos y transporte seguro. RUC: 0993405280001. Guayaquil, Ecuador.",
    locale: "es_EC",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${inter.variable}`}
    >
      <body className="min-h-full flex flex-col antialiased bg-white text-navy">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
