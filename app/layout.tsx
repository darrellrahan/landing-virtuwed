import type { Metadata } from "next";
import { TogglerProvider } from "./context/toggler";
import { inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Virtuwed",
  description: "Virtual Wedding Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TogglerProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </TogglerProvider>
  );
}
