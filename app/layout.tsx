'use client'
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "./utils/utils";
import Header from "./components/Header";
import { usePathname } from "next/navigation";
import path from "path";

const inter = Inter({ subsets: ["latin"] });
 
// export const metadata: Metadata = {
//   title: "PeTinder"
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={cn("h-screen w-screen flex flex-col", inter.className)}>
        {pathname !== "/" && pathname !== "/login" && <Header /> }
        {children}
      </body>
    </html>
  );
}
