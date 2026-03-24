import { notFound } from "next/navigation";
import { ReactNode } from "react";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Inter } from "next/font/google";
 
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ram² Immobilien"
};

type Props = {
    children: ReactNode,
    params: Promise<{locale: string}>
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({ children, params }: Props) {
    const {locale} = await params;
    const messages = await getMessages()
    
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale} className={inter.className}>
            <body className={inter.className}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Navbar />
                    <div className="content">
                        {children}
                    </div>
                    <Footer />
                </NextIntlClientProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
