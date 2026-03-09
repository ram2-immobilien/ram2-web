import type { Metadata } from "next";
import { ReactNode } from "react";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "@/components/Navbar/Navbar";

import "./globals.css"

export const metadata: Metadata = {
    title: "Ram² Immobilien",
};

type Props = {
    children: ReactNode
}

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <div className="content">
                    {children}
                </div>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
