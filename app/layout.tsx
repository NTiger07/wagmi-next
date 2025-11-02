import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { cookieToInitialState } from "wagmi";
import { getConfig } from "./utils/config";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web3 Starter",
  description: "How frontends interact with smart contracts",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers()
  const cookieHeader = headerList.get('cookie')
  const initialState = cookieToInitialState(getConfig(), cookieHeader)

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Providers initialState={initialState}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
