import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "TransferBoard | Football transfer reporting intelligence",
  description: "TransferBoard scores football transfer reporting against evidence and context at publication time.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
