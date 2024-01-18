import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { clsx } from "clsx";
import "./globals.css";
import { Nav } from "@/components/Nav";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "raoqidi's site",
  description: "The official site of raoqidi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, roboto_mono.variable)}>
        <div className={clsx("min-w-[320px] min-h-screen")}>
          <Nav />
          <main className="max-w-[75ch] mx-auto pt-12 pb-28 px-5">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
