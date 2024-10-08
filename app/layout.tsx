import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { ThemeProvider } from "./context/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link id="theme-css" href={`/themes/lara-light-indigo/theme.css`} rel="stylesheet"></link>
      </head>

      <body className={inter.className}>
      <ThemeProvider>
          <PrimeReactProvider>
            {children}
          </PrimeReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
