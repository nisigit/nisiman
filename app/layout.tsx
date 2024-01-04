import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nisiman",
  description:
    "Hi! I'm Nisiman, a final year Computer Science student at The University of Edinburgh.",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
