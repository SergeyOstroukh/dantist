import type {Metadata} from "next"
import "@/app/globals.css"
import React from "react";

export const metadata: Metadata = {
    title: "Дантист клиник",
    description: "Лучшие стоматологические услуги в вашем городе. Профессиональные врачи, современные технологии.",
    keywords: "дантист, стоматология, стоматологические услуги, лечение зубов",
    icons: {
        icon: "/favicon.ico",
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ru">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="yandex-verification" content="26ae3287c0ac46cb" />
            <title>Дантист клиник</title>
            <link rel="icon" href="/favicon.ico" type="image/png" />
        </head>
        <body>{children}</body>
        </html>
    );
}
