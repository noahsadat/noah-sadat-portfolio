import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Particles from "../components/Particles"; // Corrected casing for import
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Noah Sadat | Portfolio",
  description: "Personal portfolio of Noah Sadat - Frontend Developer | Content & PIM manager",
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/logo.svg",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/logo.png",
      sizes: "32x32",
    },
    {
      rel: "apple-touch-icon",
      url: "/logo.png",
      sizes: "180x180",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-light-lightest dark:bg-dark-lightest text-dark-medium dark:text-light-white">
        <div className="relative min-h-screen">
          <div className="absolute inset-0 z-0">
            <Particles />
          </div>
          <div className="relative">
            <Providers>
              <Header />
              {children}
            </Providers>
          </div>
        </div>
      </body>
    </html>
  );
}
