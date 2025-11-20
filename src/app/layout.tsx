import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mezcal Artesanal - Tradición y Sabor",
  description: "Descubre el auténtico mezcal artesanal de Oaxaca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
