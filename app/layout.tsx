import { Appbar } from "@/components/Appbar";
import { ThemeProvider } from "@/components/Theme";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "@/types/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "System Monitor",
  description: "System Monitor by Mario Lazzari",
};

function RootLayout({ children }: Layout) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Appbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
