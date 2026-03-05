import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Annapurna Connect",
  description: "A social impact platform connecting surplus food donors with nearby NGOs in real time.",
};

import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
