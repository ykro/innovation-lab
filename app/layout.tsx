import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "opsz"],
});

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
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
    <html
      lang="es"
      className={`${fraunces.variable} ${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper font-sans text-ink">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
