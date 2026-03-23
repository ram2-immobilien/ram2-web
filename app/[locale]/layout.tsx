import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
 
import Navbar from "@/components/Navbar/Navbar";

import "./globals.css"

export const metadata: Metadata = {
  title: "Ram² Immobilien"
};

const inter = Inter({
    subsets: ['latin']
})

type Props = {
    children: ReactNode,
    params: Promise<{locale: string}>
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({ children, params }: Props) {
    const {locale} = await params;
    const messages = (await import(`@/messages/${locale}.json`)).default
    
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html className={inter.className} lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Navbar />
                    <div className="content">
                        {children}
                    </div>
                </NextIntlClientProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
