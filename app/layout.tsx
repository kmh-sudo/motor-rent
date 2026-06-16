import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sidebar } from "./components/sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moter Rent Dashboard",
  description: "Premium dashboard for moter rental management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-slate-950">
        <Sidebar />
        <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#eef2ff_0,#f8fafc_36%,#e2e8f0_100%)] px-4 py-6 md:pl-80 md:pr-8 lg:py-8 lg:pl-[20rem] lg:pr-10">
          {children}
        </main>
      </body>
    </html>
  );
}
