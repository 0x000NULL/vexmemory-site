import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vex Memory — Memory That Thinks",
  description: "An open-source graph + vector hybrid memory system for AI agents. Built on PostgreSQL, Apache AGE, and pgvector.",
  openGraph: {
    title: "Vex Memory — Memory That Thinks",
    description: "An open-source graph + vector hybrid memory system for AI agents.",
    url: "https://github.com/0x000NULL/vex-memory",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vex Memory — Memory That Thinks",
    description: "Graph + vector hybrid memory for AI agents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
