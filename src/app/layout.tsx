import "@/app/globals.css";
import NavBar from "@/components/NavBar";
import React from "react";
import Footer from "@/components/Footer";

export const metadata = {
  // Global default title
  title: {
    default: "Boris de Jong",
    template: "%s | Boris de Jong", // '%s' will be replaced by page-specific title
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative sm:p-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black min-h-screen text-zinc-800 selection:bg-zinc-900 selection:text-white dark:text-zinc-200">
        <NavBar />
        <main className="mx-auto max-w-4xl space-y-16 p-4 sm:p-0 pt-10 sm:pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
