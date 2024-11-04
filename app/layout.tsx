import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Kfiatek Website",
  description: "Michal's portfolio, blog, gallery and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        {children}
      </body>
    </html>
  );
}
