import type { Metadata } from "next";
import { Inter, Open_Sans, Poppins } from "next/font/google";
import "./globals.css";

const inter = Open_Sans({ subsets: ["latin"], weight: ["300" ,"400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "NEWS",
  description: "Created by tgtan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
