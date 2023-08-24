import type { Metadata } from "next";
import { Banner } from "@/components/Banner";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desafio 34 - Lista de compras",
  description:
    "Desafio 34 do BoraCodar da Rocketseat, o desafio consiste em uma lista de compras.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} relative bg-gray-600`}>
        <Banner />
        {children}
      </body>
    </html>
  );
}
