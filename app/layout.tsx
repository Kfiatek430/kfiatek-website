import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Kfiatek Website",
  description: "Michal's portfolio, blog, gallery and more",
};

// import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
// config.autoAddCss = false

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
