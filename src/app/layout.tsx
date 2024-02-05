import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";
import "./globals.css";

import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Generated by Salman Farshe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body suppressHydrationWarning className={inter.className}>
        <Theme
          appearance="light"
          accentColor="teal"
          grayColor="slate"
          scaling="100%"
          panelBackground="translucent"
        >
          <Providers>{children}</Providers>
        </Theme>
      </body>
    </html>
  );
}
