import type { Metadata } from "next";
import "../globals.css";

import Link from "next/link";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

import { geistMono, geistSans, inter } from "@/assets/fonts";

import { SITE_URL } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type LayoutProps = {
	params: Promise<{ locale: string }>;
};

export async function generateMetadata({
	params,
}: LayoutProps): Promise<Metadata> {
	const { locale } = await params;
	const meta = (await import(`@/messages/${locale}/metadata`)).default;

	return {
		metadataBase: new URL(SITE_URL),
		title: {
			template: meta.title.template,
			default: meta.title.default,
		},
		description: meta.description,
		openGraph: {
			type: "website",
			siteName:
				locale === "ar" ? "بي تو برو للرعاية الصحية" : "B2 Pro Healthcare",
			title: meta.title.default,
			description: meta.description,
		},
	};
}

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
					<Link
						className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-background focus:p-4 focus:text-foreground"
						href="#main-content"
					>
						Skip to main content
					</Link>
					<Navbar />
					{children}
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
