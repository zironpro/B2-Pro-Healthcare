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
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_APP_URL || "https://b2prohealthcare.com"
	),
	title: {
		template: "%s | B2 Pro Healthcare",
		default: "B2 Pro Healthcare — Healing Hearts, Changing Lives",
	},
	description:
		"B2 Pro Healthcare provides world-class medical expertise with compassionate care. Book an appointment with our specialist doctors today.",
	openGraph: {
		type: "website",
		siteName: "B2 Pro Healthcare",
		title: "B2 Pro Healthcare — Healing Hearts, Changing Lives",
		description: "World-class medical expertise with compassionate care.",
	},
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
					<a
						className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-background focus:p-4 focus:text-foreground"
						href="#main-content"
					>
						Skip to main content
					</a>
					<Navbar />
					{children}
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
