import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mikaku Udon Bar — Hand-pulled udon in Toronto",
  description:
    "A small Toronto udon bar serving chewy, hand-pulled noodles, viral chicken curry udon, and warm Japanese comfort food. Halal chicken available.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-paper text-ink">{children}</body>
    </html>
  );
}
