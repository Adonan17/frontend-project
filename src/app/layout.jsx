import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Navbar from "@/components/Navbar/Navbar";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Corner",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html data-theme="retro" lang="en">
        <body className={inter.className}>
          <Navbar></Navbar>
          {children}
          </body>
      </html>
    </StoreProvider>
  );
}