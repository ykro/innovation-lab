import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Innovation Lab — Universidad Galileo",
  description:
    "Laboratorio de Innovacion de Universidad Galileo. Donde la curiosidad se convierte en tecnologia.",
  openGraph: {
    title: "Innovation Lab — Universidad Galileo",
    description:
      "Laboratorio de Innovacion de Universidad Galileo. Donde la curiosidad se convierte en tecnologia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
