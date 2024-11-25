import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Particles from "../components/Particles"; // Corrected casing for import
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Noah Sadat | Portfolio",
  description: "Personal portfolio of Noah Sadat - Frontend Developer | Content & PIM manager",
  icons: {
    icon: '/favicon.ico'
  }
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
