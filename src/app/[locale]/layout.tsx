import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {routing} from "@/languages/i18n/routing";
import {notFound} from "next/navigation";
import {getMessages} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout (
    {
      children,
      params
    }: {
      children: React.ReactNode;
      params: Promise<{ locale: string }>;
    }
) {

  const locale = (await params).locale

  if (!routing.locales.includes(locale as any)) notFound();

  const messages = await getMessages();

  return (
      <html lang={locale} suppressHydrationWarning>
      <body>
      <NextIntlClientProvider messages={messages}>
        {
          children
        }
      </NextIntlClientProvider>
      </body>
      </html>
  );
}
