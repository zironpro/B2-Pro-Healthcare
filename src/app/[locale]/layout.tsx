import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "../globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "B2 Pro Healthcare",
	description: "Healing Hearts, Changing Lives.",
};

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;
	const messages = await getMessages();

	return (
		<html
			className={cn(
				"font-sans antialiased",
				geistSans.variable,
				geistMono.variable,
				inter.variable
			)}
			dir={locale === "ar" ? "rtl" : "ltr"}
			lang={locale}
		>
			<body>
				<NextIntlClientProvider messages={messages}>
					<Navbar />
					{children}
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
