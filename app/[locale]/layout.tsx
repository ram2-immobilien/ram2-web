import Head from "next/head";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
 
import Navbar from "@/components/Navbar/Navbar";

import "./globals.css"


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

    console.log(locale)
    console.log(Object.values(messages))
    
    return (
        <html lang={locale}>
            <Head>
                <title>Ram² Immobilien"</title>
            </Head>
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
