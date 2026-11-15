import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://innovationlab-ug.vercel.app"),
  title: {
    default: "Innovation Lab · Universidad Galileo",
    template: "%s · Innovation Lab",
  },
  description: "El laboratorio de innovación de Universidad Galileo. Explora proyectos de inteligencia artificial, robótica y software, conoce al equipo y propón una colaboración.",
  openGraph: {
    siteName: "Innovation Lab · Universidad Galileo",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={instrumentSans.variable}>
      <body className="flex min-h-dvh flex-col antialiased">
        <I18nProvider>
          <Header />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
