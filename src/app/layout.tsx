import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Bun API",
    description: "An Open API make by bunhere.com",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`w-full flex justify-center ${inter.className}`}>
        {children}
        </body>
        </html>
    );
}
