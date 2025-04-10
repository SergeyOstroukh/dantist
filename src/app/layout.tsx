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
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}
