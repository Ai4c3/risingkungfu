import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rising Kung Fu",
  description: "Rising Kung Fu - Powered by Strapi and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
