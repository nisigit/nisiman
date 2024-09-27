import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
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
    "Hi! I'm Nisiman. I'm a software engineer from New Delhi, currently based in London.",
  icons: {
    icon: [
      "favicon.ico?v=4",
      "favicon-16x16.png",
      "favicon-32x32.png",
      "apple-touch-icon.png",
      "android-chrome-192x192.png",
      "android-chrome-384x384.png",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="4nhUpWRjo9954Ju2x1CbNIt4kS-BXflq5mdjC90UG94"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className=" bg-sky-400 dark:bg-slate-800 min-h-screen p-2 sm:p-4">
            <div className="mx-auto my-4 xl:p-4 lg:my-8 text-lg w-full lg:max-w-5xl rounded-3xl shadow-2xl bg-sky-50 text-black dark:bg-gray-900 dark:text-white dark:shadow-gray-800 overflow-auto">
              <section className="py-6 px-4 m-2 sm:m-6 border-b-4 border-neutral-300 dark:border-slate-700">
                <div className="flex justify-between">
                  <div className="flex items-center">
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
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
