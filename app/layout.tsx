import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";

const shooting = localFont({
  src: "../fonts/shooting-star.ttf",
  variable: "--font-shooting",
});

const geistSans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
export const metadata: Metadata = {
  title: "SHRO",
  description:
    "SHRO is a decentralized, the way we interact with the digital world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${shooting.variable} bg-[#586A9C] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
