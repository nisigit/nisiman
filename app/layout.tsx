import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Image from "next/image";
import Footer from "./components/Footer";
import nisi from "@/public/assets/nisi.jpeg";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nisiman",
  description:
    "Hi! I'm Nisiman, a final year Computer Science student at The University of Edinburgh.",
  icons: {
    icon: [
      "favicon.ico?v=4",
      "favicon-16x16.png",
      "favicon-32x32.png",
      "apple-touch-icon.png",
      "android-chrome-192x192.png",
      "android-chrome-512x512.png",
      "site.webmanifest",
      "safari-pinned-tab.svg",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="4nhUpWRjo9954Ju2x1CbNIt4kS-BXflq5mdjC90UG94"
        />
      </head>
      <body className={inter.className}>
        <div className=" bg-slate-800 min-h-screen p-2 sm:p-4">
          <div className="mx-auto my-4 xl:p-4 lg:my-8 text-lg lg:w-[1000px] bg-gray-900 text-white rounded-3xl shadow-2xl shadow-gray-800 overflow-auto">
            <section className="py-6 m-2 sm:m-6 border-b-4 border-slate-700">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Image
                    src={nisi}
                    alt="Nisiman's profile image"
                    width={80}
                    height={80}
                    className="lg:block rounded-full mr-4"
                  />
                  <h1 className="text-xl font-bold leading-tight sm:text-4xl">
                    Nisiman
                  </h1>
                </div>
                <div>
                  <Navbar />
                </div>
              </div>
            </section>
            {children}
            <Footer />
          </div>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
