import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Vacuum Bunnies – Adventure Manual",
  description:
    "Official manual for the Vacuum Bunnies adventure game.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="site-shell">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
